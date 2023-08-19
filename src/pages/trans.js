document.addEventListener("DOMContentLoaded", function () {
    const translateButton = document.getElementById("translateButton");
    translateButton.addEventListener("click", getTranslate);
});

async function getTranslate() {
    try {
        const patientName = document.getElementById("patientName").value;
        const onsetDate = document.getElementById("onsetDate").value;
        const diagnosis = document.getElementById("diagnosis").value;
        const treatment = document.getElementById("treatment").value;
        const futureTreatment = document.getElementById("futureTreatment").value;
        const nextAppointment = document.getElementById("nextAppointment").value;

        const response = await fetch("http://localhost:3001/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                patientName,
                onsetDate,
                diagnosis,
                treatment,
                futureTreatment,
                nextAppointment,
            }),
        });

        const data = await response.json();
        console.log(data);
        const translatedContent = data.assistant;
        document.getElementById("translatedContent").value = translatedContent;
    } catch (error) {
        console.error(error);
    }
}
