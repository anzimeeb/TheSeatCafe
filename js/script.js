window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//FOR SEGMENT

document.addEventListener('DOMContentLoaded', function() {
    const segmentInputs = document.querySelectorAll('.segment input[type="radio"]');
    const allContent = document.getElementById('allContent');
    const segmentPanes = document.querySelectorAll('.segment-pane');

    // Handle segment change event
    segmentInputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                // Hide all segment panes by default
                segmentPanes.forEach(pane => {
                    pane.style.display = 'none';
                });

                if (input.id === 'all') {
                    // Show combined content for "All" segment
                    let combinedContent = '';

                    segmentPanes.forEach((pane, idx) => {
                        if (idx > 0) { // Skip the "All" pane itself
                            combinedContent += '<br/> <br/>'+ pane.innerHTML; // Append content of other segments
                        }
                    });

                    allContent.innerHTML = combinedContent; // Update "All" content
                    allContent.style.display = 'block'; // Show "All" content
                } else {
                    // Show content for selected segment
                    segmentPanes[index].style.display = 'block';
                    allContent.style.display = 'none'; // Hide "All" content
                }
            }
        });
    });
});