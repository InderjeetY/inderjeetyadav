/*
view-controller.js
Responsibility: Handles switching between the Static Resume view and the Smart Resume Tailor (iframe) view.
*/

document.addEventListener('DOMContentLoaded', () => {
    const staticResumeView = document.getElementById('staticResumeView');
    const aiBuilderView = document.getElementById('aiBuilderView');
    const aiBuilderBtn = document.getElementById('aiBuilderBtn');
    const backToStaticBtn = document.getElementById('backToStaticBtn');

    function switchToAIBuilder() {
        if (staticResumeView && aiBuilderView) {
            staticResumeView.style.display = 'none';
            aiBuilderView.style.display = 'flex'; 
            document.body.style.overflow = 'hidden';
        }
    }

    function switchToStaticView() {
        if (staticResumeView && aiBuilderView) {
            staticResumeView.style.display = 'block';
            aiBuilderView.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

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
});
