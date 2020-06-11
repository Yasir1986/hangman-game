// Async Await
const getPuzzle = async (wordCount) => {
  const resposne = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (resposne.status === 200) {
    const data = await resposne.json();
    return data.puzzle;
  } else {
    throw new Error("Unable get async Puzzle");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};

// Fetch
const getPuzzleOld = (wordCount) => {
  return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((resposne) => {
      if (resposne.status === 200) {
        return resposne.json();
      } else {
        throw new Error("Unbale to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getCountry = async (countryCode) => {
  const resposne = await fetch("//restcountries.eu/rest/v2/all");

  if (resposne.status === 200) {
    const data = await resposne.json();
    const country = data.filter(
      (country) => country.alpha2Code === countryCode
    );
    return country;
  } else {
    throw new Error("Unable to fetech country API");
  }
};

const getCountryOld = (countryCode) => {
  return fetch("//restcountries.eu/rest/v2/all")
    .then((resposne) => {
      if (resposne.status === 200) {
        return resposne.json();
      } else {
        throw new Error("Unable to fetch countries API");
      }
    })
    .then((data) => {
      return (country = data.filter(
        (country) => country.alpha2Code === countryCode
      ));
    });
};

const getLocationOld = () => {
  return fetch("//ipinfo.io/json?token=1a11bd55cc8f9c").then(
    (resposne) => {
      if (resposne.status === 200) {
        return resposne.json();
      } else {
        throw new Error("Unable to fetch location API");
      }
    }
  );
};

const getLocation = async () => {
  const resposne = await fetch("//ipinfo.io/json?token=1a11bd55cc8f9c");

  if (resposne.status === 200) {
    const data = resposne.json();
    return data;
  } else {
    throw new Error("Unable to fetch location API");
  }
};
