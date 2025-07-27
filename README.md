# Legal Audio Evidence Portal - Deployment Guide

## Overview
This is a comprehensive legal audio evidence analysis portal documenting 22 judicial procedural errors from Liverpool Family Court proceedings. The portal features zero animations, instant loading, and professional presentation with toggle-based error analysis.

## Credentials & Services

### Vercel Deployment
- **Token**: `GpZ3SNXUVRPqrcJUV1IfwtGp`
- **Account**: justiceminds-projects
- **Previous Working URL**: https://judicial-audio-evidence-q89wxfgvx-justiceminds-projects.vercel.app

### Supabase Configuration
- **Project URL**: `https://tvecnfdqakrevzaeifpk.supabase.co`
- **Storage Bucket**: `audio-evidence`
- **Base URL**: `https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/`
- **Header Image**: `branding/justice_minds_header.png`

### Environment Variables (.env)
```bash
# Supabase Configuration
SUPABASE_URL=https://tvecnfdqakrevzaeifpk.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWNuZmRxYWtyZXZ6YWVpZnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyNzc2MDAsImV4cCI6MjAxMjg1MzYwMH0.example
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWNuZmRxYWtyZXZ6YWVpZnBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzI3NzYwMCwiZXhwIjoyMDEyODUzNjAwfQ.example

# Vercel Deployment
VERCEL_TOKEN=GpZ3SNXUVRPqrcJUV1IfwtGp
VERCEL_ORG_ID=justiceminds-projects
VERCEL_PROJECT_ID=fresh-legal-portal

# GitHub Repository
GITHUB_REPO=https://github.com/justicemindsdev/fresh-legal-portal.git
GITHUB_PAGES_URL=https://justicemindsdev.github.io/fresh-legal-portal/
```

## Deployment Instructions

### Quick Deployment (Recommended)
```bash
npx vercel --prod --token GpZ3SNXUVRPqrcJUV1IfwtGp --yes
```

### Step-by-Step Deployment
1. **Navigate to project directory**:
   ```bash
   cd FRESH_LEGAL_PORTAL
   ```

2. **Commit any changes**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

3. **Deploy to Vercel**:
   ```bash
   npx vercel --prod --token GpZ3SNXUVRPqrcJUV1IfwtGp --yes
   ```

4. **Set project name** (if prompted):
   - Use: `fresh-legal-portal`
   - Scope: `justiceminds-projects`

## Common Deployment Hurdles & Solutions

### 1. **Authentication Issues**
**Problem**: Vercel deploys require authentication and show login pages instead of content.

**Solution**: Update `vercel.json` with public access:
```json
{
  "version": 2,
  "name": "fresh-legal-portal",
  "public": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        }
      ]
    }
  ]
}
```

### 2. **Project Name Issues**
**Problem**: Error: "Project names must be lowercase and cannot contain sequences like '---'"

**Solution**: 
- Use simple names like `fresh-legal-portal`
- Avoid spaces and special characters
- Add `"name": "fresh-legal-portal"` to vercel.json

### 3. **Directory Path Issues**
**Problem**: Deployment fails due to spaces in directory paths

**Solution**:
```bash
# Navigate to correct directory first
cd "/path/to/FRESH_LEGAL_PORTAL"
# Ensure you're in the right location
pwd
```

### 4. **Interactive Prompts**
**Problem**: Vercel CLI prompts for manual input during deployment

**Solutions**:
```bash
# Use --yes flag
npx vercel --prod --token GpZ3SNXUVRPqrcJUV1IfwtGp --yes

# Or provide answers programmatically
echo -e "y\n1\nfresh-legal-portal\nn" | npx vercel --prod --token TOKEN
```

### 5. **Cache Issues**
**Problem**: Old content appears even after successful deployment

**Solution**: Force cache clearing in vercel.json:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        },
        {
          "key": "Pragma",
          "value": "no-cache"
        },
        {
          "key": "Expires",
          "value": "0"
        }
      ]
    }
  ]
}
```

### 6. **Repository Access Issues**
**Problem**: Deployment fails due to repository permissions

**Solution**:
```bash
# Ensure repository is properly linked
git remote -v
# Should show: origin  https://github.com/justicemindsdev/fresh-legal-portal.git

# If not linked correctly:
git remote add origin https://github.com/justicemindsdev/fresh-legal-portal.git
```

## File Structure
```
FRESH_LEGAL_PORTAL/
├── index.html              # Main portal with 22 errors
├── vercel.json             # Deployment configuration  
├── README.md               # This file
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages backup
└── .git/                   # Git repository
```

## Features Implemented
- ✅ **22 Error Analysis**: Complete toggle structure from formatting file
- ✅ **"What Happened" Emphasis**: Yellow-highlighted summary sections
- ✅ **Audio Quote Boxing**: Blue-bordered audio controls with transcripts
- ✅ **Zero Animations**: Instant loading, no delays or transitions
- ✅ **Professional Formatting**: GOV.UK inspired styling
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **Audio Evidence**: Direct links to Supabase-hosted audio files

## Complete Audio Files List

### Error 1: Denial of Statutory Advocacy Rights
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_01_Advocacy_Rights_Exact_DD_EXACT.mp3

# Ben's Argument  
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_01_Advocacy_Rights_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_01_Advocacy_Rights_Exact_FULL_EXACT.mp3
```

### Error 2: McKenzie Friend Rights Dismissed
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_02_McKenzie_Friend_Exact_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_02_McKenzie_Friend_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_02_McKenzie_Friend_Exact_FULL_EXACT.mp3
```

### Error 3: Reading Support Request Denied
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_03_Reading_Support_Exact_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_03_Reading_Support_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_03_Reading_Support_Exact_FULL_EXACT.mp3
```

### Error 4: Special Guardianship Order Misapplication
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_04_Special_Guardianship_Exact_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_04_Special_Guardianship_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_04_Special_Guardianship_Exact_FULL_EXACT.mp3
```

### Error 5: Kinship Assessment Bias
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_05_Kinship_Assessment_Exact_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_05_Kinship_Assessment_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_05_Kinship_Assessment_Exact_FULL_EXACT.mp3
```

### Error 6: Due Process Violation
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_06_Due_Process_Violation_Exact_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_06_Due_Process_Violation_Exact_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_06_Due_Process_Violation_Exact_FULL_EXACT.mp3
```

### Error 7: Educational Support Coordination Failure
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_07_Educational_Support_Coordination_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_07_Educational_Support_Coordination_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_07_Educational_Support_Coordination_FULL_EXACT.mp3
```

### Error 8: De Facto Parent Status Ignored
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_08_De_Facto_Parent_Status_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_08_De_Facto_Parent_Status_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_08_De_Facto_Parent_Status_FULL_EXACT.mp3
```

### Error 9: Medical Appointments Crisis
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_09_Medical_Appointments_Crisis_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_09_Medical_Appointments_Crisis_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_09_Medical_Appointments_Crisis_FULL_EXACT.mp3
```

### Error 10: Separation from Family Protocol Breach
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_10_Separation_From_Family_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_10_Separation_From_Family_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_10_Separation_From_Family_FULL_EXACT.mp3
```

### Error 11: Information Request Mischaracterized
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_11_Information_Request_Mischaracterized_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_11_Information_Request_Mischaracterized_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_11_Information_Request_Mischaracterized_FULL_EXACT.mp3
```

### Error 12: Defamation by Authority
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_12_Defamation_By_Authority_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_12_Defamation_By_Authority_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_12_Defamation_By_Authority_FULL_EXACT.mp3
```

### Error 13: Missing Documents Evidence
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_13_Missing_Documents_Evidence_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_13_Missing_Documents_Evidence_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_13_Missing_Documents_Evidence_FULL_EXACT.mp3
```

### Error 14: Child Emotional Distress Dismissal
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_14_Child_Emotional_Distress_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_14_Child_Emotional_Distress_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_14_Child_Emotional_Distress_FULL_EXACT.mp3
```

### Error 15: Due Process Rights Ignored
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_15_Due_Process_Rights_Ignored_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_15_Due_Process_Rights_Ignored_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_15_Due_Process_Rights_Ignored_FULL_EXACT.mp3
```

### Error 16: Safeguarding Role Dismissed
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_16_Safeguarding_Role_Dismissed_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_16_Safeguarding_Role_Dismissed_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_16_Safeguarding_Role_Dismissed_FULL_EXACT.mp3
```

### Error 17: Family Bonds Sacrificed
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_17_Family_Bonds_Sacrificed_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_17_Family_Bonds_Sacrificed_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_17_Family_Bonds_Sacrificed_FULL_EXACT.mp3
```

### Error 18: Unique Bond and Qualifications Ignored
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_18_Unique_Bond_And_Qualifications_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_18_Unique_Bond_And_Qualifications_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_18_Unique_Bond_And_Qualifications_FULL_EXACT.mp3
```

### Error 19: Fair Process Request Denied
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_19_Fair_Process_Request_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_19_Fair_Process_Request_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_19_Fair_Process_Request_FULL_EXACT.mp3
```

### Error 20: Physical Attack Evidence
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_20_Physical_Attack_Evidence_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_20_Physical_Attack_Evidence_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_20_Physical_Attack_Evidence_FULL_EXACT.mp3
```

### Error 21: Investigation Failure Complete
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_21_Investigation_Failure_Complete_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_21_Investigation_Failure_Complete_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_21_Investigation_Failure_Complete_FULL_EXACT.mp3
```

### Error 22: Video Evidence Defense Dismissed
```bash
# Judge Statement
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_22_Video_Evidence_Defense_DD_EXACT.mp3

# Ben's Argument
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_22_Video_Evidence_Defense_BEN_EXACT.mp3

# Complete Exchange
https://tvecnfdqakrevzaeifpk.supabase.co/storage/v1/object/public/audio-evidence/exact_22_Video_Evidence_Defense_FULL_EXACT.mp3
```

## File Path Structure
```bash
# Local project structure
/Volumes/EXCELLENCE DIRECT/EXPERTISE/databasestorage/creds/CLAUD_CODE/FRESH_LEGAL_PORTAL/
├── index.html              # Main portal file
├── vercel.json             # Deployment config
├── README.md               # This documentation
├── .github/workflows/      # GitHub Actions
└── .git/                   # Git repository

# Supabase storage structure
/audio-evidence/
├── branding/
│   └── justice_minds_header.png
├── exact_01_Advocacy_Rights_Exact_DD_EXACT.mp3
├── exact_01_Advocacy_Rights_Exact_BEN_EXACT.mp3
├── exact_01_Advocacy_Rights_Exact_FULL_EXACT.mp3
├── [... all 66 audio files for 22 errors ...]
└── exact_22_Video_Evidence_Defense_FULL_EXACT.mp3
```

## Development Setup for AI
```bash
# Clone repository
git clone https://github.com/justicemindsdev/fresh-legal-portal.git
cd fresh-legal-portal

# Set environment variables
export VERCEL_TOKEN=GpZ3SNXUVRPqrcJUV1IfwtGp
export SUPABASE_URL=https://tvecnfdqakrevzaeifpk.supabase.co

# Deploy to Vercel
npx vercel --prod --token $VERCEL_TOKEN --yes

# Test locally
python3 -m http.server 8000
open http://localhost:8000
```

## Troubleshooting

### If Deployment Fails:
1. Check you're in the correct directory: `pwd`
2. Verify git status: `git status`
3. Ensure Vercel token is valid: `GpZ3SNXUVRPqrcJUV1IfwtGp`
4. Try manual deployment: Remove `--yes` flag and answer prompts manually

### If Site Shows Authentication:
1. Check vercel.json has `"public": true`
2. Add no-cache headers
3. Wait 2-3 minutes for deployment to propagate

### If Audio Doesn't Load:
1. Verify Supabase URLs are accessible
2. Check browser console for CORS errors
3. Test individual audio URLs directly

## Contact
**Repository**: https://github.com/justicemindsdev/fresh-legal-portal  
**Expert**: Ben Mak (Master of Laws, 93.9% JAC Framework Assessment)  
**Organization**: Justice Minds Forensic Intelligence