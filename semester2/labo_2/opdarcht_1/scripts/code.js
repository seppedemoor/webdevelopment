const setup = () => {
    window.alert("Dit is een mededeling");

    let confirmResult = window.confirm("Weet u het zeker?");
    console.log("Confirm return value:", confirmResult);

    let promptResult = window.prompt("Wat is uw naam?", "onbekend");
    console.log("Prompt return value:", promptResult);
}
window.addEventListener("load", setup);