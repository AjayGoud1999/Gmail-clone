import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilService {

    makeId(length = 5): string {
        var txt = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }

    generateEmailContent(): { subject: string, body: string } {

        const subjects = [
            "Final Reminder: Complete Your Project Proposal by End of Day Tomorrow to Meet the Submission Deadline",
            "Invitation to Our Exclusive Networking Event with Industry Leaders – Secure Your Spot Before It’s Too Late!",
            "Important Changes to Our Company Policies – Please Review the Updated Guidelines Effective from Next Month",
            "Your Customized Report for the Recent Marketing Campaign – Detailed Insights and Analysis Enclosed",
            "Urgent Action Required: Update Your Account Security Settings to Protect Against Recent Threats",
            "Congratulations on Your Promotion – Here’s What You Need to Know About Your New Role and Responsibilities",
            "Upcoming Webinar on Emerging Technologies – Register Now to Get Ahead in Your Field and Gain Valuable Knowledge",
            "Thank You for Your Recent Purchase – Here’s a Special Discount Code for Your Next Order as a Token of Appreciation",
            "Monthly Financial Summary and Budget Review – Attached Are the Key Figures and Analysis for Your Review",
            "Important: Immediate Action Required to Resolve Issues with Your Recent Account Transaction",
            "Invitation to Participate in Our Comprehensive Customer Satisfaction Survey – Your Feedback is Crucial for Us",
            "Detailed Instructions for the Upcoming Company Retreat – Schedule, Activities, and What to Bring",
            "New Feature Rollout Announcement – Discover How Our Latest Updates Can Enhance Your User Experience",
            "Special Announcement: New Service Launch with Exclusive Early Access – Learn More About What’s New",
            "Reminder: Complete the Registration Process for Our Annual Conference – Don’t Miss Out on This Key Event",
            "Invitation to Join Our New Professional Development Program – Enhance Your Skills with Our Expert-led Sessions",
            "Reminder: Your Subscription Renewal is Due Soon – Ensure Continuous Access to Our Premium Features",
            "Exclusive Offer: Limited-Time Discount on Our Premium Plan – Take Advantage of This Special Promotion Today",
            "Alert: Important Security Update Required for Your Account – Follow the Instructions to Ensure Safety",
            "Congratulations on Your Application Approval – Here Are the Next Steps and What You Can Expect Moving Forward",
            "Follow-Up: Action Required for Your Pending Application – Please Review and Respond at Your Earliest Convenience",
            "Invitation: Participate in Our Research Study on Consumer Behavior – Your Insights Will Help Shape Future Trends",
            "Reminder: Your Annual Review is Coming Up – Please Prepare Your Performance Report and Goals for the Meeting",
            "Exciting Update: New Enhancements to Our Mobile App – Check Out the Latest Features and Improvements",
            "Important Notice: Upcoming Changes to Our Terms of Service – Review the Updated Agreement by the End of the Week",
            "Exclusive Preview: Beta Access to Our New Software Tool – Be Among the First to Try and Provide Feedback",
            "Special Announcement: Launch of Our New Online Course – Enroll Now and Get a Discount on Your First Module",
            "Reminder: Submit Your Tax Documents by the End of the Month to Ensure Timely Processing",
            "Urgent: Update Required for Your Account Billing Information – Avoid Service Interruptions by Updating Today",
            "Invitation: Attend Our Annual Industry Summit – Network with Experts and Learn About the Latest Innovations",
            "Congratulations: You’ve Been Selected for a Special Award – Join Us for the Recognition Ceremony Next Month",
            "Important: Resolve Issues with Your Recent Subscription Payment – Contact Us for Assistance if Needed",
            "Reminder: Complete Your Onboarding Documents – Ensure All Required Forms Are Submitted Before Your Start Date",
            "Exciting News: We’re Expanding Our Services – Learn About the New Areas We’re Covering and How It Benefits You",
            "Final Call: Register for Our Upcoming Training Workshop – Limited Spots Available, So Sign Up Soon!"
        ];
        
        


        const bodies = [
            "Dear,\n\nThis is a final reminder to complete and submit your project proposal by the end of the day tomorrow. Failure to meet this deadline could affect the overall project timeline. Please ensure that all required documents are uploaded and submitted in the provided format.\n\nBest regards.",

            "Hello,\n\nWe are excited to invite you to our exclusive networking event with industry leaders happening next week. This is a fantastic opportunity to connect with other professionals and explore new collaborations. Please RSVP by the end of the week to secure your spot.\n\nLooking forward to your participation.",

            "Dear,\n\nWe have recently made some important changes to our company policies. These updates will take effect starting next month. We encourage you to review the updated guidelines to ensure compliance and avoid any issues. Please let us know if you have any questions or need further clarification.\n\nBest.",

            "Hi,\n\nAttached is your customized report for the recent marketing campaign. This report includes detailed insights and analysis to help you understand the campaign's performance and outcomes. Please review the document and let us know if you have any questions or require further information.\n\nSincerely.",

            "Dear,\n\nWe have detected some security threats to your account. For your protection, we request that you update your security settings as soon as possible. Follow the instructions provided in the link below to ensure your account remains secure.\n\nThank you for your prompt attention.",

            "Hello,\n\nCongratulations on your recent promotion! We are thrilled for you and want to ensure you have all the information you need about your new role and responsibilities. Please review the attached document which outlines your new duties and benefits.\n\nWarm regards.",

            "Dear ,\n\nWe’re hosting a webinar on emerging technologies next month, and we’d love for you to join. This session will cover the latest trends and provide valuable insights from industry experts. Register now to ensure your place in this informative event.\n\nBest wishes.",

            "Hi,\n\nThank you for your recent purchase! As a token of our appreciation, we are offering you a special discount on your next order. Use the code provided below at checkout to enjoy your discount. We look forward to serving you again soon.\n\nCheers.",

            "Dear,\n\nAttached is your monthly financial summary and budget review. This report includes key figures and analysis to help you track your expenses and manage your budget effectively. Please review the document and contact us if you have any questions.\n\nBest regards.",

            "Hello,\n\nThere was an issue with your recent account transaction that requires immediate attention. Please review the details provided in the attached document and take the necessary actions to resolve the issue.\n\nThank you for your prompt response.",

            "Dear,\n\nWe value your feedback and invite you to participate in our comprehensive customer satisfaction survey. Your insights are crucial for us to improve our services and better meet your needs. Please take a few moments to complete the survey linked below.\n\nSincerely.",

            "Hi, \n\nDetailed instructions for our upcoming company retreat are now available. This includes the schedule, activities planned, and what you need to bring. Please review the attached document to prepare for the event.\n\nLooking forward to seeing you there.",

            "Dear,\n\nWe are excited to announce the rollout of our new feature! This update includes several enhancements designed to improve your user experience. Check out the details in the attached document and let us know if you have any questions.\n\nBest regards.",

            "Hello,\n\nWe have a special announcement regarding the launch of a new service. You are among the first to hear about this new offering, which comes with exclusive early access. Learn more about the new service and how it can benefit you.\n\nWarm regards.",

            "Dear,\n\nThis is a reminder to complete the registration process for our annual conference. Don’t miss out on this important event that will bring together industry leaders and professionals. Follow the link below to finalize your registration.\n\nLooking forward to your participation.",

            "Hi,\n\nWe are pleased to invite you to join our new professional development program. This program includes expert-led sessions designed to enhance your skills and advance your career. Enroll now to take advantage of this opportunity.\n\nBest.",

            "Dear,\n\nYour subscription is due for renewal soon. To ensure uninterrupted access to our premium features, please renew your subscription before it expires. Follow the instructions in the attached document to complete the renewal process.\n\nThank you.",

            "Hello,\n\nWe’re offering an exclusive, limited-time discount on our premium plan. This special promotion is available for a short period only. Use the provided code to take advantage of this offer and enjoy enhanced features at a lower cost.\n\nBest regards.",

            "Dear,\n\nAn important security update is required for your account. Please follow the instructions in the attached document to update your account settings and ensure your information remains protected.\n\nThank you for your prompt action.",

            "Hi,\n\nCongratulations! Your application has been approved. We are excited to move forward and look forward to discussing the next steps with you. Please review the attached document for details on what to expect moving forward.\n\nSincerely.",

            "Dear,\n\nWe need you to take action on your pending application. Please review the attached document for details and respond at your earliest convenience to proceed with the next steps.\n\nBest regards.",

            "Hello,\n\nWe’re conducting a research study on consumer behavior and would greatly appreciate your participation. Your insights will help us understand current trends and improve our services. Follow the link below to participate in the study.\n\nThank you.",

            "Dear,\n\nJust a reminder that your annual performance review is coming up. Please prepare your performance report and set your goals for the meeting. This review is a great opportunity to discuss your achievements and future plans.\n\nBest regards.",

            "Hi,\n\nWe have some exciting updates for our mobile app! Check out the latest features and improvements designed to enhance your experience. We hope you find these updates useful and look forward to your feedback.\n\nCheers.",

            "Dear,\n\nWe want to inform you of upcoming changes to our terms of service. Please review the updated agreement, which will take effect from next week. Ensure you are aware of the new terms and how they may affect your use of our services.\n\nBest regards.",

            "Hello,\n\nYou’re invited to a special preview of our new software tool. As a beta tester, you’ll have early access to the tool and can provide valuable feedback before its official launch. Follow the instructions to access the beta version.\n\nBest.",

            "Dear,\n\nWe are launching a new online course designed to help you develop new skills. Enroll now to take advantage of a discount on your first module and start learning with our expert instructors.\n\nLooking forward to your participation.",

            "Hi,\n\nThis is a reminder to submit your tax documents by the end of the month. Ensure all required documents are sent to avoid delays in processing. If you have any questions or need assistance, please let us know.\n\nThank you.",

            "Dear,\n\nWe need you to update your billing information to avoid any service interruptions. Follow the link provided to update your details and ensure continued access to our services.\n\nBest regards.",

            "Hello,\n\nWe invite you to attend our annual industry summit. This event will feature keynote speakers, panel discussions, and networking opportunities with industry professionals. Don’t miss out on this key event – register today!\n\nBest.",

            "Dear,\n\nCongratulations! You’ve been selected to receive a special award. Join us for the recognition ceremony next month where we will celebrate your achievements. Details of the event are attached.\n\nWarm regards.",

            "Hi,\n\nThere was an issue with your recent subscription payment. Please review the attached document and contact us for assistance if you have any questions or need help resolving the issue.\n\nThank you.",

            "Dear,\n\nPlease complete your onboarding documents before your start date. This includes submitting any required forms and completing necessary steps to ensure a smooth transition into your new role.\n\nLooking forward to your start.",

            "Hello,\n\nWe’re excited to announce that we are expanding our services to include new areas. This expansion will provide you with additional benefits and opportunities. Learn more about the new services and how they can enhance your experience by reviewing the attached details.\n\nBest regards.",

            "Dear,\n\nThis is a final call to register for our upcoming training workshop. The workshop will cover essential skills and techniques to advance your career. Spaces are limited, so be sure to sign up soon to secure your spot.\n\nLooking forward to seeing you there."
        ];

        // Randomly select a subject and body
        const idx = Math.floor(Math.random() * subjects.length)
        return { subject: subjects[idx], body: bodies[idx % bodies.length] }
    }

    makeName(): string {
        const names = [
            'James Smith',
            'Michael Johnson',
            'Robert Williams',
            'David Jones',
            'William Brown',
            'Richard Davis',
            'Charles Miller',
            'Joseph Wilson',
            'Thomas Moore',
            'Daniel Taylor',
            'Matthew Anderson',
            'Joshua Thomas',
            'Andrew Jackson',
            'Christopher White'
        ];
        return names[Math.floor(Math.random() * names.length)]
    }

    randomTimestamp(months = 4): number {
        // Get current timestamp
        const currentTimestamp = Date.now()

        // Get timestamp x months ago
        const monthsAgo = new Date()
        monthsAgo.setMonth(monthsAgo.getMonth() - months)
        const monthsAgoTimestamp = monthsAgo.getTime()

        // Generate a random number between the timestamps of x months ago and now
        const randomTimestamp = monthsAgoTimestamp + Math.random() * (currentTimestamp - monthsAgoTimestamp)

        // Return the random timestamp
        return randomTimestamp
    }

}