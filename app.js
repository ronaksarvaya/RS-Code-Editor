let jsPlayG = document.querySelector("#js")
let cssPlayG = document.querySelector("#css")
let htmlPlayG = document.querySelector("#html")
let labels = document.querySelectorAll('#jslabel, #htmllabel, #csslabel');
jsPlayG.style.display = "none";
cssPlayG.style.display = "none";

//start--console output


//end--console output

// start -- changing color of label on click
labels.forEach(label => {
    label.addEventListener("click", changeScale);
});
function changeScale(event) {
    labels.forEach(label => label.style.backgroundColor = "rgba(201, 197, 197)");
    event.target.style.backgroundColor = "green";
}
// end -- changing color of label on click




const elements = [htmlPlayG, cssPlayG, jsPlayG];

    function hideother(event) {
        elements.forEach(element => element.style.display = "none");
        event.target.style.display = "block";
    }

    elements.forEach(element => {
        element.addEventListener("click", hideother);
    });

function run(){
    
let jsCode= jsPlayG.value
let cssCode = cssPlayG.value
let htmlCode = htmlPlayG.value
let output=document.querySelector("#output")

let fullCode = `
${htmlCode}
<style>${cssCode}</style>
<script>${jsCode}<\/script>
`;


output.contentDocument.open();
output.contentDocument.write(fullCode);
output.contentDocument.close();
}