$(function() {
 
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
  let pet_info = {
    name: 'Thinkpup',
    weight: 6,
    happiness: 0,
  }
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.bark-button').click(clickedBarkButton);

  function clickedBarkButton () {
    alert('WOOF!');
  }

  function clickedTreatButton() {
    pet_info.happiness += 2; // Increase pet happiness
    pet_info.weight += 5; // Increase pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    pet_info.happiness += 3; // Increase pet happiness
    pet_info.weight -= 3// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info.happiness -= 2; // Decrease pet happiness
    pet_info.weight -= 5;// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if (pet_info.weight < 0){
      alert(`${pet_info.name}'s weight is dangerously low! Feed your pet!`);
      pet_info.weight = 0;
    }
    if (pet_info.weight > 90){
      alert(`${pet_info.name}'s weight is too high! Stop feeding your pet!`);
      pet_info.weight = 0;
    }
    let petImage = document.getElementById('the_pet');
    petImage.width = 115 + pet_info.weight;
  }
  
  // Updates your HTML with the current values in your pet_info object
  function updatePetInfoInHtml() {
    $('.name').text(pet_info.name);
    $('.weight').text(pet_info.weight);
    $('.happiness').text(pet_info.happiness);
  }
})
