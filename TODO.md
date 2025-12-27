# Contact Form Fix Plan

## Information Gathered
- The submitContact.ts file has a type mismatch with Notion API
- The Notion database has a property named 'title' that expects 'rich_text' type
- Current code sends it as 'title' type, causing validation error
- Existing retry logic doesn't handle this specific case

## Plan
1. **Update retry logic** in submitContact.ts to handle property named 'title' that expects 'rich_text'
2. **Modify error handling** to catch this specific validation error and retry with correct property type
3. **Improve property mapping** to be more robust against schema mismatches

## Dependent Files
- `api/submitContact.ts` - Main file to be edited

## Follow-up Steps
1. ✅ **Fixed fallback logic** - Changed name property from 'title' to 'rich_text' in fallback handling
2. ✅ **Enhanced retry logic** - Added comprehensive retry logic to handle 'title' property expecting 'rich_text' type
3. ✅ **Added type safety** - Fixed TypeScript errors by properly casting property values
4. **Test the fix** - Submit a contact form to verify it works
5. **No additional installations required** - Code fix only

## Current Issue Details
```
Type mismatch between request for property 'title'. Got type 'title' and expected type 'rich_text' from database schema.
```

This occurs because:
- Database has property named 'title' but configured as 'rich_text' type
- Code detects property as 'title' type and sends title block format
- Notion expects rich_text format instead
