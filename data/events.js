/**
 * getEvents gets events from firebase and also transform the data from object to array
 */
export async function getEvents() {
  const response = await fetch(
    "https://nextjs-course-a1708-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",
  );
  const data = await response.json();

  const transormedEvents = [];
  for (const k in data) {
    transormedEvents.push({
      id: k,
      title: data[k].title,
      description: data[k].description,
      location: data[k].location,
      date: data[k].date,
      image: data[k].image,
      isFeatured: data[k].isFeatured,
    });
  }

  return transormedEvents;
}
