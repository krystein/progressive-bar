let currentStep = 0;
const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSteps() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.remove("inactive");
      step.classList.add("active");
    } else if (index === currentStep) {
      step.classList.remove("inactive");
      step.classList.add("active");
    } else {
      step.classList.remove("active");
      step.classList.add("inactive");
    }
  });
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
    nextBtn.disabled = false;
  }
  if (currentStep === 0) {
    prevBtn.disabled = true;
  }
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
    prevBtn.disabled = false;
  }
  if (currentStep === steps.length - 1) {
    nextBtn.disabled = true;
  }
}

updateSteps();
