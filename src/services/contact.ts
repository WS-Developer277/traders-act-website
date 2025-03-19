/**
 * Contact form service for handling contact form submissions
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sends a contact form submission
 * @param formData - The contact form data
 * @returns A promise that resolves to a ContactResponse
 */
export const submitContactForm = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // Validate inputs
    if (!formData.name.trim()) {
      return { success: false, message: 'Please enter your name' };
    }

    if (!formData.email.trim()) {
      return { success: false, message: 'Please enter your email address' };
    }

    if (!validateEmail(formData.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    if (!formData.message.trim()) {
      return { success: false, message: 'Please enter a message' };
    }

    // In a real application, this would be an API call to your backend
    // For now, we'll simulate a successful API call
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the form submission (for demonstration purposes)
    console.log('Contact form submitted:', {
      ...formData,
      notifyEmail: 'contact@tradersact.com'
    });

    // In a real application, this would be the API call:
    /*
    const response = await fetch('https://api.tradersact.com/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        ...formData,
        notifyEmail: 'contact@tradersact.com'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    const data = await response.json();
    return data;
    */

    // Return a success response
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'An error occurred while submitting the form. Please try again later.'
    };
  }
};
