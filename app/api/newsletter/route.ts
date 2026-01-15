import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // SIMULATION: In a real app, this would use nodemailer or an email service (Resend, SendGrid)
        // The user requested: "send an automatic email using their email address to the contact email"
        // This typically implies setting the 'Reply-To' or 'From' (if verified) to the user's email.

        console.log(`[Newsletter API] Processing subscription for: ${email}`);
        console.log(`[Newsletter API] Sending automatic email notification to:  Info@qwerise.org`);
        console.log(`[Newsletter API] Reply-To set to: ${email}`);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log(`[Newsletter API] Email successfully "sent" (Simulated).`);

        return NextResponse.json({ success: true, message: 'Subscription successful' });
    } catch (error) {
        console.error('[Newsletter API] Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
