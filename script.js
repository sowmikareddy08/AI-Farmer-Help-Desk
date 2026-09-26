function detectDisease() {
  const resultDiv = document.getElementById("result");

  // Simulated AI logic
  const diseases = [
    {
      name: "Leaf Blight",
      solution: "Use copper-based fungicide and reduce moisture."
    },
    {
      name: "Brown Spot",
      solution: "Apply organic pesticide and ensure proper drainage."
    }
  ];

  const random = diseases[Math.floor(Math.random() * diseases.length)];

  resultDiv.innerHTML = `
    <h3>Disease Detected:</h3>
    <p><strong>${random.name}</strong></p>
    <p>Treatment: ${random.solution}</p>
  `;
}

function chatbot() {
  const q = document.getElementById("question").value.toLowerCase();
  let response = "Please consult your nearest agriculture officer.";

  if (q.includes("fertilizer")) {
    response = "Use nitrogen fertilizer every 15 days.";
  }
  if (q.includes("rice")) {
    response = "Rice grows best in clay soil with regular irrigation.";
  }

  document.getElementById("chatResponse").innerHTML =
    "<strong>AI:</strong> " + response;
}
