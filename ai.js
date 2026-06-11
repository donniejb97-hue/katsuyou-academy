// ============================================================================
// CLAUDE AI - Enhanced Feedback via Vercel Backend
// ============================================================================

// ⚠️ CHANGE THIS TO YOUR VERCEL URL AFTER DEPLOYING!
// Example: 'https://katsuyou-backend-xyz.vercel.app/api/claude'
const VERCEL_BACKEND_URL = 'https://katsuyou-backend.vercel.app/api/claude';

// Enhanced AI Feedback - Calls your Vercel backend
async function getEnhancedAIFeedback(verb, form, userAnswer, correctAnswer, verbType, verbHiragana) {
    if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
        console.log('⚠️ Please update VERCEL_BACKEND_URL with your actual Vercel URL');
        return null;
    }

    const prompt = `You are a helpful, encouraging Japanese language tutor providing feedback to a student learning verb conjugations.

The student attempted to conjugate this verb:
- Verb: ${verb}
- Verb type: ${verbType}
- Base form (hiragana): ${verbHiragana}
- Target form: ${form}
- Their answer: "${userAnswer}"
- Correct answer: "${correctAnswer}"

CRITICAL ANALYSIS FIRST:
1. Check if the user's answer looks like a conjugation of a COMPLETELY DIFFERENT VERB:
   - Does "${userAnswer}" seem to come from a different base verb than "${verbHiragana}"?
   - For example, if base is "あげる" (ageru) but they wrote "あけました" (akemashita), they used "あける" (akeru - to open) instead!
   
2. If they used a DIFFERENT VERB:
   - Clearly state: "You used [different verb] instead of ${verbHiragana}"
   - Explain the difference between the two verbs
   - Then show the correct conjugation

3. If they used the CORRECT BASE but made a conjugation error:
   - Identify the specific mistake (wrong ending, wrong stem, etc.)
   - Explain what went wrong in the conjugation process

Provide detailed, educational feedback that:
1. Identifies exactly what went wrong (different verb? wrong conjugation pattern? wrong ending?)
2. Explains the correct conjugation rule step-by-step for ${verbType} verbs
3. Gives 2-3 concrete examples of other ${verbType} verbs following the same pattern
4. Provides a memory trick or tip to avoid this mistake
5. Encourages them warmly

Format your response like this:
**What went wrong:** [Clear diagnosis - be specific if they used a different verb!]

**The correct pattern:** [Step-by-step explanation for ${verbType} verbs]

**Examples:** 
- [verb 1]: [conjugation]
- [verb 2]: [conjugation]  
- [verb 3]: [conjugation]

**Memory tip:** [Helpful trick]

Keep it friendly and educational!`;

    console.log('🤖 AI: Calling Vercel backend...');
    
    try {
        const response = await fetch(VERCEL_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                maxTokens: 1500
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ Backend error:', response.status, errorData);
            return null;
        }

        const result = await response.json();
        
        if (result.success) {
            console.log('✅ AI: Received feedback successfully');
            console.log('📊 Token usage:', result.usage);
            return result.feedback;
        } else {
            console.error('❌ AI: Request failed:', result.error);
            return null;
        }
    } catch (error) {
        console.error('❌ AI: Network error:', error);
        return null;
    }
}

// Get More Examples - Calls your Vercel backend
async function getMoreExamples(verb, form, correctAnswer) {
    if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
        console.log('⚠️ Please update VERCEL_BACKEND_URL with your actual Vercel URL');
        return null;
    }

    const prompt = `You are a Japanese language tutor. A student wants more practice examples for conjugating verbs into ${form} form.

The example they just learned was: ${verb} → ${correctAnswer}

Provide 5 MORE examples of verbs that follow the SAME conjugation pattern, formatted as:
- [verb in kanji (hiragana)] - meaning → conjugated form

Make the examples common, useful verbs. Keep it concise.`;

    console.log('🤖 AI: Getting more examples from backend...');
    
    try {
        const response = await fetch(VERCEL_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                maxTokens: 800
            })
        });

        if (!response.ok) {
            console.error('❌ Backend error:', response.status);
            return null;
        }

        const result = await response.json();
        
        if (result.success) {
            console.log('✅ AI: Received examples');
            return result.feedback;
        } else {
            console.error('❌ Failed to get examples:', result.error);
            return null;
        }
    } catch (error) {
        console.error('❌ AI: Error getting examples:', error);
        return null;
    }
}

// Generate Context Sentence - Shows how the conjugation is used
async function generateContextSentence(verb, conjugatedForm, formName) {
    console.log('🎯 Context sentence requested:', {verb, conjugatedForm, formName});
    
    // ALWAYS return a fallback immediately to ensure something shows
    const fallbackSentence = `${conjugatedForm}を使います。\n(${conjugatedForm} o tsukaimasu.)\n"Use ${conjugatedForm}."`;
    
    // Try AI generation if backend is configured
    if (!VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
        console.log('🤖 Trying AI generation...');
        
        const prompt = `You are a Japanese language tutor. A student just correctly conjugated a verb and needs to see it used in context.

Verb: ${verb}
Conjugated form: ${conjugatedForm}
Form: ${formName}

Provide ONE natural, practical example sentence that uses "${conjugatedForm}" in context.

Format EXACTLY like this (no other text):
[Japanese sentence with ${conjugatedForm}]
([Romaji])
"[English translation]"

Example format:
昨日、友達に本をあげました。
(Kinō, tomodachi ni hon o agemashita.)
"Yesterday, I gave a book to my friend."

Keep it simple, natural, and practical.`;
        
        try {
            const response = await fetch(VERCEL_BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt, maxTokens: 200 })
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.feedback) {
                    console.log('✅ AI sentence generated!');
                    return result.feedback.trim();
                }
            }
            console.log('⚠️ AI failed, using fallback');
        } catch (error) {
            console.log('⚠️ AI error, using fallback:', error.message);
        }
    } else {
        console.log('⚠️ Backend not configured, using fallback');
    }
    
    // Return fallback
    console.log('🔄 Returning fallback sentence');
    return fallbackSentence;
}

// Generate Conju's Analysis for Practice Reports
async function generateConjuReportAnalysis(analysis, mistakeLog) {
    if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
        console.log('⚠️ Skipping Conju analysis - backend URL not configured');
        return;
    }

    // Build a summary of the practice session
    const formNames = {
        'present-polite': 'Present Polite (ます)',
        'present-negative': 'Negative (ない)',
        'past': 'Past (た)',
        'te-form': 'Te-form (て)',
        'potential': 'Potential (られる)',
        'passive': 'Passive (られる)',
        'causative': 'Causative (させる)',
        'volitional': 'Volitional (よう)',
        'conditional': 'Conditional (たら)',
        'causative-passive': 'Causative-Passive',
        'imperative': 'Imperative'
    };

    // Get top 3 problematic forms
    const topForms = Object.entries(analysis.formErrors || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([form, count]) => `${formNames[form] || form} (${count} mistakes)`)
        .join(', ');

    // Get top 3 problematic verb types
    const topVerbTypes = Object.entries(analysis.verbTypeErrors || {})
        .sort((a, b) => b[1] - a[1])
        .map(([type, count]) => `${type} verbs (${count} mistakes)`)
        .join(', ');

    // Sample recent mistakes (up to 3)
    const recentMistakes = mistakeLog.slice(-3).reverse().map(m => 
        `${m.verbKanji} (${m.verbHiragana}): tried "${m.userAnswer}" but correct is "${m.correctAnswer}" for ${formNames[m.form] || m.form}`
    ).join('; ');

    const prompt = `You are Conju, a friendly Japanese conjugation coach. Analyze this student's practice session and provide encouraging, actionable insights.

**Session Stats:**
- Total attempts: ${analysis.totalAttempts}
- Mistakes: ${analysis.mistakeCount}
- Accuracy: ${analysis.accuracyRate}%
- Top problem forms: ${topForms || 'none'}
- Top problem verb types: ${topVerbTypes || 'none'}
- Recent mistakes: ${recentMistakes || 'none'}

Provide a brief analysis (3-4 sentences max) that:
1. Acknowledges their effort positively
2. Identifies the main pattern in their mistakes (e.g., "struggling with う-verb te-form sound changes")
3. Gives ONE specific, actionable tip to improve
4. Ends with encouragement

Be warm, concise, and specific. Don't use bullet points. Write in a friendly, conversational tone.`;

    console.log('🤖 Conju: Analyzing practice report...');

    try {
        const response = await fetch(VERCEL_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                maxTokens: 500
            })
        });

        if (!response.ok) {
            console.error('❌ Conju analysis failed:', response.status);
            document.getElementById('conju-analysis-section').style.display = 'none';
            return;
        }

        const result = await response.json();

        if (result.success) {
            console.log('✅ Conju: Analysis complete');
            const analysisDiv = document.getElementById('conju-analysis-section');
            if (analysisDiv) {
                analysisDiv.innerHTML = `
                    <h3 class="report-section-title">📚 Conju's Analysis</h3>
                    <div class="mistake-card" style="background: #f0f9ff; border-left: 4px solid #3b82f6;">
                        <div style="color: #1e293b; line-height: 1.7;">
                            ${result.feedback.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                `;
            }
        } else {
            console.error('❌ Conju analysis error:', result.error);
            document.getElementById('conju-analysis-section').style.display = 'none';
        }
    } catch (error) {
        console.error('❌ Conju analysis network error:', error);
        document.getElementById('conju-analysis-section').style.display = 'none';
    }
}

// Global variable to store current question context for "Show More Examples"
window.currentQuestionContext = null;

// Show More Examples button handler
async function showMoreExamples() {
    if (!window.currentQuestionContext) return;
    
    const { verb, form, correctAnswer } = window.currentQuestionContext;
    const examplesDiv = document.getElementById('ai-examples');
    
    if (!examplesDiv) return;
    
    examplesDiv.innerHTML = '<p style="color: #666; font-style: italic;">💡 Generating more examples...</p>';
    examplesDiv.style.display = 'block';
    
    const examples = await getMoreExamples(verb, form, correctAnswer);
    
    if (examples) {
        examplesDiv.innerHTML = `<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 4px solid #4a90a4;">
            <strong>📚 More Practice Examples:</strong><br><br>
            ${examples.replace(/\n/g, '<br>')}
        </div>`;
    } else {
        examplesDiv.innerHTML = '<p style="color: #999;">Could not load more examples. Check console for details.</p>';
    }
}