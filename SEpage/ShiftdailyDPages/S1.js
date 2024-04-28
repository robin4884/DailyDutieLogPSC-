document.getElementById('Form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form data
    var formData = new FormData(this);
  
    // Create a CSV string
    var csvContent = "data:text/csv;charset=utf-8,";
  
    // Get the form field names as an array
    var fieldNames = Array.from(formData.keys());
  
    // Add column names to the CSV content
    csvContent += fieldNames.join(',') + '\n';
  
    // Get the form field values as an array
    var fieldValues = Array.from(formData.values());
  
    // Add field values to the CSV content
    csvContent += fieldValues.join(',') + '\n';
  
    // Create a temporary link element to download the CSV file
    var link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.target = '_blank';
    link.download = 'DailyLog1stShift.csv';
    link.click();
  
    // Reset the form
    this.reset();
  });