import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Get the pathname from the URL
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip the function for certain paths
  if (
    pathname.startsWith("/_netlify") ||
    pathname.startsWith("/netlify") ||
    pathname.startsWith("/.netlify") ||
    pathname.includes(".") // Skip files with extensions
  ) {
    return;
  }

  // Get the response from the origin
  const response = await context.next();

  // Clone the response to modify it
  const page = await response.text();

  // Only modify HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Add the Netlify Visual Editor script before the closing </body> tag
  const modifiedPage = page.replace(
    "</body>",
    `<script type="text/javascript">
      if (window.location.hostname !== "localhost" && window.self === window.top) {
        const script = document.createElement("script");
        script.src = "https://visual-editor.netlify.app/script.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    </script>
    </body>`
  );

  // Return the modified response
  return new Response(modifiedPage, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
