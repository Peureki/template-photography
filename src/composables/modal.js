// When clicking on a photo, trigger this func 
// MODAL - Create a modal variable in the component either single or array with default values of FALSE
// INDEX is used for array photos to target a specific photo for the modal
// ** If it's a single ref => index = 0. Ex: function(modal, 0)
export const toggleSpecificModal = (modal, index) => {
    for (let i = 0; i < modal.length; i++){
        if (i == index){
            modal[index] = !modal[index];
        } else {
            modal[i] = false;
        }
    }
}