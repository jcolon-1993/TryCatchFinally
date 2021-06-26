response = " {'deals':[{'title': 'Farrow and Ball'";

if (response)
{
  try
  {
    // Try to parse JSON
    var dealData = JSON.parse(response);
    // Show JSON data
    showContent(dealData);
  }
  catch(e)
  {
    // Create error message
    var errorMessage = e.name + " " + e.message;

    // Show devs message
    console.log(errorMessage);

    // Users message
    feed.innerHTML = "<em>Sorry, could not load deals</em>";
  }
  finally
  {
    // Add refresh link
    var link = document.createElement("a");
    link.innerHTML = " <a href='try-catch-finally.html'>reload</a>";
    feed.appendChild(link);
  }
}
