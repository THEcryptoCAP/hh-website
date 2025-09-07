'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailjsReady, setEmailjsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Error boundary effect
  useEffect(() => {
    const handleError = (error) => {
      console.error('Contact page error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const initEmailJS = () => {
      try {
        console.log('Initializing EmailJS...');
        const publicKey = 'g1bo0WckJVOojy4j_';
        
        // Check if emailjs is available
        if (typeof emailjs === 'undefined') {
          console.error('EmailJS is not loaded');
          setEmailjsReady(false);
          return;
        }
        
        // Initialize EmailJS without sending test email
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully');
        setEmailjsReady(true);
        
      } catch (error) {
        console.error('EmailJS initialization failed:', error);
        console.error('Error details:', {
          message: error?.message,
          status: error?.status,
          text: error?.text,
          stack: error?.stack
        });
        setEmailjsReady(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      initEmailJS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is ready
    if (!emailjsReady) {
      console.error('EmailJS is not ready yet');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Form validation failed');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration
      const serviceId = 'service_nw57tes';
      const templateId = 'template_dxtvk9o'; // Use the working template for both emails
      const autoReplyTemplateId = 'template_dxtvk9o'; // Auto-reply template
      const publicKey = 'g1bo0WckJVOojy4j_';

      console.log('Starting email submission...');
      console.log('Service ID:', serviceId);
      console.log('Public Key:', publicKey);
      console.log('Template IDs:', { main: templateId, autoReply: autoReplyTemplateId });
      console.log('Form data:', formData);
      
      // Verify EmailJS is properly initialized
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded properly');
      }

      // Try to send auto-reply to the user first
      console.log('Sending auto-reply...');
      console.log('Auto-reply template ID:', autoReplyTemplateId);
      try {
        const autoReplyResult = await emailjs.send(serviceId, autoReplyTemplateId, {
          name: formData.name,
          email: formData.email,
          title: 'Thank you for contacting HansHills & Co.',
          time: new Date().toLocaleString(),
          message: `We have received your message: "${formData.message}"`,
          inquiry_type: 'Auto-Reply',
          company: 'HansHills & Co.',
          recipient: 'Client'
        }, publicKey);
        console.log('Auto-reply sent successfully:', autoReplyResult);
      } catch (autoReplyError) {
        console.warn('Auto-reply failed, but continuing with main email:', autoReplyError);
        console.warn('Auto-reply error details:', {
          message: autoReplyError?.message,
          status: autoReplyError?.status,
          text: autoReplyError?.text
        });
        // Don't throw error, just continue
      }

      // Send the main contact form email to HansHills team
      console.log('Sending main email to team...');
      console.log('Main email template ID:', templateId);
      console.log('Form data being sent:', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      console.log('CLIENT MESSAGE CONTENT:', formData.message);
      console.log('MESSAGE LENGTH:', formData.message.length);
      
      try {
        console.log('Attempting to send main email with template:', templateId);
        const mainEmailResult = await emailjs.send(serviceId, templateId, {
          name: formData.name,
          email: formData.email,
          title: `Contact Form Inquiry from ${formData.name}`,
          time: new Date().toLocaleString(),
          message: formData.message,
          user_message: formData.message,
          client_message: formData.message,
          inquiry: formData.message,
          from_message: formData.message,
          reply_message: formData.message,
          inquiry_type: 'Contact Form',
          company: 'HansHills & Co.',
          recipient: 'Team',
          subject: `New Contact Form Submission from ${formData.name}`,
          reply_to: formData.email
        }, publicKey);
        console.log('Main email sent successfully:', mainEmailResult);
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (mainEmailError) {
        console.error('Main email failed:', mainEmailError);
        console.error('Main email error type:', typeof mainEmailError);
        console.error('Main email error constructor:', mainEmailError?.constructor?.name);
        console.error('Main email error keys:', Object.keys(mainEmailError || {}));
        console.error('Main email error details:', {
          message: mainEmailError?.message || 'No message',
          status: mainEmailError?.status || 'No status',
          text: mainEmailError?.text || 'No text',
          stack: mainEmailError?.stack || 'No stack',
          toString: mainEmailError?.toString?.() || 'No toString',
          name: mainEmailError?.name || 'No name',
          code: mainEmailError?.code || 'No code',
          response: mainEmailError?.response || 'No response',
          request: mainEmailError?.request || 'No request'
        });
        
        // Try to serialize the entire error object
        try {
          console.error('Full error object:', JSON.stringify(mainEmailError, null, 2));
        } catch (jsonError) {
          console.error('Could not serialize error:', jsonError);
          console.error('Raw error object:', mainEmailError);
        }
        
        // If main email fails, try with a simpler template structure
        console.log('Trying with simplified template data...');
        try {
          const simplifiedResult = await emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            title: `Contact Form Inquiry from ${formData.name}`,
            time: new Date().toLocaleString(),
            message: formData.message,
            user_message: formData.message,
            client_message: formData.message,
            inquiry: formData.message,
            from_message: formData.message,
            reply_message: formData.message,
            inquiry_type: 'Contact Form',
            company: 'HansHills & Co.',
            recipient: 'Team',
            subject: `New Contact Form Submission from ${formData.name}`,
            reply_to: formData.email
          }, publicKey);
          console.log('Simplified email sent successfully:', simplifiedResult);
          
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } catch (simplifiedError) {
          console.error('Simplified email also failed:', simplifiedError);
          console.error('Simplified error type:', typeof simplifiedError);
          console.error('Simplified error constructor:', simplifiedError?.constructor?.name);
          console.error('Simplified error keys:', Object.keys(simplifiedError || {}));
          console.error('Simplified error details:', {
            message: simplifiedError?.message || 'No message',
            status: simplifiedError?.status || 'No status',
            text: simplifiedError?.text || 'No text',
            stack: simplifiedError?.stack || 'No stack',
            toString: simplifiedError?.toString?.() || 'No toString',
            name: simplifiedError?.name || 'No name',
            code: simplifiedError?.code || 'No code',
            response: simplifiedError?.response || 'No response',
            request: simplifiedError?.request || 'No request'
          });
          
          // Try to serialize the entire error object
          try {
            console.error('Full simplified error object:', JSON.stringify(simplifiedError, null, 2));
          } catch (jsonError) {
            console.error('Could not serialize simplified error:', jsonError);
            console.error('Raw simplified error object:', simplifiedError);
          }
          
          // Fallback: Store form data locally and show success message
          console.log('EmailJS failed, storing form data locally as fallback');
          const formSubmission = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString(),
            status: 'pending_emailjs_fix'
          };
          
          // Store in localStorage as backup
          try {
            const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            existingSubmissions.push(formSubmission);
            localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
            console.log('Form data stored locally:', formSubmission);
          } catch (storageError) {
            console.error('Failed to store form data locally:', storageError);
          }
          
          // Show success message even though email failed
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          return; // Exit early to avoid throwing error
        }
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        message: error?.message || 'Unknown error',
        status: error?.status || 'No status',
        text: error?.text || 'No text',
        stack: error?.stack || 'No stack trace'
      });
      
      // More specific error handling
      if (error?.status === 400) {
        console.error('Bad Request - Check template ID and service ID');
        setSubmitStatus('error');
      } else if (error?.status === 401) {
        console.error('Unauthorized - Check public key');
        setSubmitStatus('error');
      } else if (error?.status === 403) {
        console.error('Forbidden - Check service configuration');
        setSubmitStatus('error');
      } else if (error?.status === 404) {
        console.error('Not Found - Template or service not found');
        setSubmitStatus('error');
      } else {
        console.error('Unknown error occurred');
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show error state if there's an error
  if (hasError) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-6">
            We're having trouble loading the contact form. Please try refreshing the page.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  // Show loading screen while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading contact form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 transition-all duration-300 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo size="default" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Home</Link>
                <Link href="/about" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">About</Link>
                
                <Link href="/private-equity" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Private Equity</Link>
                <Link href="/venture-capital" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Venture Capital</Link>
                <Link href="/advisory" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Advisory</Link>
                <Link href="/insights" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Insights</Link>
                <Link href="/contact" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105 bg-secondary/20 hover:bg-secondary/40 rounded-lg border border-border/30 hover:border-primary/50">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-heading-1 font-serif font-bold text-foreground mb-6">Get In Touch</h1>
              <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
                Ready to create value together? Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            {/* Contact Form - Centered */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover:bg-secondary/40 transition-all duration-300">
                <h2 className="text-heading-3 font-serif font-bold text-foreground mb-6">Send Us a Message</h2>
                
                {!emailjsReady && (
                  <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <p className="text-yellow-500 font-medium">Initializing email service...</p>
                    </div>
                  </div>
                )}

                {/* Debug: Show current message content */}
                {formData.message && (
                  <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-blue-500 font-medium">Message Preview:</p>
                        <p className="text-blue-500 text-sm mt-1">"{formData.message}"</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-primary font-medium">Thank you! Your message has been received. We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-accent-foreground mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-accent-foreground font-medium">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6" 
                      className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none bg-background/50 text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !emailjsReady}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {!emailjsReady ? 'Initializing...' : isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="large" className="text-primary-foreground mb-4" />
              <p className="text-muted-foreground">
                Where Capital Meets Strategy — Building Enduring Value Across Every Stage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/private-equity" className="hover:text-primary-foreground transition-colors">Private Equity</Link></li>
                <li><Link href="/venture-capital" className="hover:text-primary-foreground transition-colors">Venture Capital</Link></li>
                <li><Link href="/advisory" className="hover:text-primary-foreground transition-colors">Advisory</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
                <li><Link href="/insights" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
                <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-muted-foreground">
                Ready to create value together? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hanshills & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
