async function getData({
    keyword = "",        
    city = "",          
    country = "US",     
    classificationName = "", 
    size = 10,          
    page = 0            
} = {}) {
    const API_KEY = "X0XQVHXEQ9AZ5qPRywDlNqMZfdES24ZH"; // Replace with your actual API key
    const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

    // Construct query parameters dynamically
    const params = new URLSearchParams({
        apikey: API_KEY,
        keyword,
        city,
        countryCode: country,
        classificationName,
        size,
        page
    });

    // Build the final API URL
    const apiUrl = `${BASE_URL}?${params.toString()}`;
    console.log("Constructed API URL:", apiUrl); // Log the constructed URL for debugging

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        return data._embedded?.events || []; // Return events if available
    } catch (error) {
        console.error("Error fetching Ticketmaster events:", error);
        return [];
    }
}


getData({ keyword: "rap" })
    .then(events => console.log(events))
    .catch(err => console.error(err));
