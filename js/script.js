window.onload = () => {
    let submitButton = document.getElementById("hitung_bmi");
    
    submitButton.addEventListener("click", calculateBMI);

};

function calculateBMI(){
    /* Getting input from user into weight variable.
    Input is string so typecasting is necessary. */
    let beratValue = parseInt(document.getElementById("beratInput").value);
    /* Getting input from user into age variable.
    Input is string so typecasting is necessary. */
    let usiaValue = parseInt(document.getElementById("usiaInput").value);
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let tinggiValue = parseInt(document.getElementById("tinggiInput").value);
    
    let judul_hasil = document.getElementById("judulHasil");
    let bmi_condition = document.getElementById("bmi_condition");
    let result = document.getElementById("result");
    let status_bmi = document.getElementById("status_bmi");

    // Checking the user providing a proper
    // value or not
    if (beratValue === "" || isNaN(beratValue))
        alert("Ada yang kosong");
 
    else if (usiaValue === "" || isNaN(usiaValue))
        alert("Ada yang kosong");
    
    else if (tinggiValue === "" || isNaN(tinggiValue))
        alert("Ada yang kosong");

    // Calculate BMI
    else{

        // Fixing upto 2 decimal places
        let BMI = (beratValue / ((tinggiValue * tinggiValue)/ 10000)).toFixed(2);
        result.textContent = BMI
        // After the calculations and setting the BMI results
        // Scroll to the 'judul_hasil' element using the scrollIntoView method
        judul_hasil.scrollIntoView({behavior: "smooth"})

        // Dividing as per the BMI conditions
            if (BMI< 18.5) {
                bmi_condition.textContent = "Kekurangan Berat Badan";
                status_bmi.textContent = "Anda kekurangan berat badan, Jangan lupa makan teratur yaa^^";}
    
            else if (BMI >= 18.5 && BMI <= 24.9) {
                bmi_condition.textContent = "Normal (Ideal)";
                status_bmi.textContent = "Anda memiliki berat badan yang ideal, Yeay congrats yaa!!";}   

            else if (BMI >= 25 && BMI <= 29.9) {
                bmi_condition.textContent = "Kelebihan Berat Badan";
                status_bmi.textContent = "Anda kelebihan berat badan, Jangan lupa olahraga yaa^^";} 
                
            else {
                bmi_condition.textContent = "Kegemukan (Obesitas)";
                status_bmi.textContent = "Anda memiliki berat badan obesitas, Semangat diet yaa";} 
        
        
        
    }
}




