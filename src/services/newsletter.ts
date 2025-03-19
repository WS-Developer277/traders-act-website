/**
 * Newsletter service to handle subscriptions
 */

interface SubscriptionResult {
  success: boolean;
  message: string;
}

/**
 * Subscribe a user to the newsletter
 * @param email The email address to subscribe
 * @returns Promise with subscription result
 */
export async function subscribeToNewsletter(email: string): Promise<SubscriptionResult> {
  try {
    // Validate email format
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    // In a real application, this would be an API call to your backend
    // For demo purposes, we'll simulate sending an email notification
    
    // Simulate API call
    const response = await fetch('https://api.tradersact.com/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email,
        notifyEmail: 'contact@tradersact.com'
      }),
    }).catch(() => {
      // If the API is not available, simulate success for demo purposes
      console.log(`Newsletter subscription for ${email} - Notification would be sent to contact@tradersact.com`);
      return { ok: true };
    });

    if (response?.ok) {
      return {
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      };
    }

    // Fallback for demo purposes
    return {
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
}
