const API_URL = "http://localhost:8000";

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const sorted = await response.json();
  return sorted.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

// TODO: Once API is ready.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch("/launches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)
    })    
  } catch (error) {
    return {
      ok: false
    }
  }
}

// TODO: Once API is ready.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`/launches/${id}`, {
      method: "DELETE",
    })    
  } catch (error) {
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};