// Listen for submit    

document.getElementById('loan-form').addEventListener('submit',function (e){
    // hide results 
    document.getElementById('results').style.display = 'none';
    // show loader
    document.getElementById('loading').style.display = 'block';


    setTimeout(calculaterResults, 2000);

    e.preventDefault();
}); 

// calculate Results 

function calculaterResults(e) 
{ 
    console.log('calculating...');
    //uı variables 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalyPayment = document.getElementById('total-payment');
    const totalyInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value); 
    const calculatetedInterest = parseFloat(interest.value) / 100 / 12 ; 
    const calculatedPayments = parseFloat(years.value) * 12 ; 


    // compute monthly payments
    const x = Math.pow(1 + calculatetedInterest,calculatedPayments);
    const monthly = (principal * x * calculatetedInterest) / ( x - 1); 

    if(isFinite(monthly))
    { 
        monthlyPayment.value = monthly.toFixed(2);
        totalyPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalyInterest.value = ((monthly * calculatedPayments) - principal.toFixed(2));

        // show results
        document.getElementById('results').style.display = 'block';
        // hide loader
        document.getElementById('loading').style.display = 'none';
    }
    else
    { 

        showError('Please Check Your Numbers');


        // console.log('Please Check Your Numbers');
    }


    e.preventDefault();
}

function showError(error)
    { 
        // show results
        document.getElementById('results').style.display = 'none';
        // hide loader
        document.getElementById('loading').style.display = 'none';
        // create div
        const errorDiv = document.createElement('div'); 

        //Get elements 
        const card = document.querySelector('.card'); 
        const heading = document.querySelector('.heading')

        // Add class 
        errorDiv.className = 'alert alert-danger' ; 

        // Create text node and append to div 
        errorDiv.appendChild(document.createTextNode(error));
        // insert error above heading
        card.insertBefore(errorDiv, heading);
        // clear error after 3 seconds 
        setTimeout(clearError, 3000);     
    }

    // clear error 
    function clearError ( )
    { 
        document.querySelector('.alert').remove();
    }






