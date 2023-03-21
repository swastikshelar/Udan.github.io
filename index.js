function countUp(targetStatId, startValue, endValue, durationInSeconds) {
  const durationInMilliseconds = durationInSeconds * 1000;
  let currentVal = startValue;
  const increment = (endValue - startValue) / (durationInMilliseconds / 10);
  const targetStat = document.getElementById(targetStatId);
  const targetElement = targetStat.querySelector("h1");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const intervalId = setInterval(() => {
          currentVal += increment;
          if (currentVal >= endValue) {
            clearInterval(intervalId);
            currentVal = endValue;
          }
          targetElement.innerText = Math.floor(currentVal);
        }, 10);
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(targetStat);
}

countUp("totalPeople", 0, 666, 2);
countUp("kmTravelled", 0, 10000, 2);
countUp("studentsTaught", 0 , 15, 2);
countUp("villagesAdopted", 0, 1, 2)