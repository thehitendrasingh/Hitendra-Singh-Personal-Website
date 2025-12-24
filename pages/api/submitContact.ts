import { Client } from '@notionhq/client';
// Note: Types below are for a standard Vercel/Next.js environment.
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Backend API Route for Contact Form Submission
 * 
 * This serverless function connects the Contact form to the Notion Database.
 */

// Keys provided by the user. 
// In a production environment, these should ideally be stored in Environment Variables (process.env).
// We prioritize process.env if available, otherwise fallback to the provided keys.
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. Method Check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Parse Body
  const { name, email, subject, message } = req.body;

  // 3. Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 4. Notion Client Init
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    console.error('Missing Notion Configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const notion = new Client({ auth: NOTION_API_KEY });

  try {
    // 5. Create Page in Notion
    await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        // These property names must match your Notion Database columns EXACTLY (Case Sensitive)
        Name: { 
          title: [{ text: { content: name } }] 
        },
        Email: { 
          email: email 
        },
        Subject: { 
          rich_text: [{ text: { content: subject || 'General' } }] 
        },
        Message: { 
          rich_text: [{ text: { content: message } }] 
        },
        Date: {
            date: { start: new Date().toISOString() }
        }
      },
    });

    return res.status(200).json({ success: true, message: 'Saved to Notion' });

  } catch (error: any) {
    console.error('Notion API Error:', error);
    // Return detailed error for debugging purposes
    return res.status(500).json({ error: 'Failed to save to Notion', details: error.message || error.code });
  }
}