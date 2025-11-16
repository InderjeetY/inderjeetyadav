/*
view-controller.js
Responsibility: Handles switching between Static View and Iframe, and toggling Iframe versions.
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Get Elements ---
    const staticResumeView = document.getElementById('staticResumeView');
    const aiBuilderView = document.getElementById('aiBuilderView');
    const aiBuilderBtn = document.getElementById('aiBuilderBtn');
    const backToStaticBtn = document.getElementById('backToStaticBtn');
    
    // Elements for Version Switching
    const versionSelector = document.getElementById('versionSelector');
    const aiIframe = document.getElementById('aiIframe');

    // --- View Toggle Functions ---

    function switchToAIBuilder() {
        if (staticResumeView && aiBuilderView) {
            staticResumeView.style.display = 'none';
            aiBuilderView.style.display = 'flex'; 
            document.body.style.overflow = 'hidden';
            
            // Ensure iframe loads the currently selected version when opening
            if (versionSelector && aiIframe) {
                if (aiIframe.src !== versionSelector.value) {
                    aiIframe.src = versionSelector.value;
                }
            }
        }
    }

    function switchToStaticView() {
        if (staticResumeView && aiBuilderView) {
            staticResumeView.style.display = 'block';
            aiBuilderView.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // --- Event Listeners ---

    if (aiBuilderBtn) {
        aiBuilderBtn.addEventListener('click', (event) => {
            event.preventDefault();
            switchToAIBuilder();
        });
    }

    if (backToStaticBtn) {
        backToStaticBtn.addEventListener('click', (event) => {
            event.preventDefault();
            switchToStaticView();
        });
    }

    // Listen for dropdown changes
    if (versionSelector && aiIframe) {
        versionSelector.addEventListener('change', (event) => {
            // Update the iframe source immediately when user selects a new option
            aiIframe.src = event.target.value;
        });
    }
});
