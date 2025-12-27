import { Client } from '@notionhq/client';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return res.status(500).json({ error: 'Missing Notion environment variables' });
    }

    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // ✅ FIX: Name is RICH_TEXT (not title)
        Name: {
          rich_text: [
            {
              text: { content: name },
            },
          ],
        },

        Email: {
          email: email,
        },

        Subject: {
          select: {
            name: subject || 'General Inquiry',
          },
        },

        Message: {
          rich_text: [
            {
              text: { content: message },
            },
          ],
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Message saved to Notion successfully',
    });
  } catch (error: any) {
    console.error('❌ Notion API Error:', error);

    return res.status(500).json({
      error: 'Failed to save message',
      details: error?.message || 'Unknown error',
    });
  }
}
