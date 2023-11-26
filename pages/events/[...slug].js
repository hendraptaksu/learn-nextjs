import { useRouter } from "next/router";

/**
 * Map of month in number to month's name. E.g 01 -> January, 12 -> Desember.
 */
const yearMap = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "Desember",
};

export default function FilteredEventsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const slugObj = {};
  if (router.query.slug) {
    slugObj.year = router.query.slug[0];
    slugObj.month = router.query.slug[1];
  }

  return (
    <div>
      <h1>Events filtered by:</h1>
      <p>
        <strong>Year:</strong> {slugObj.year}
      </p>
      <p>
        <strong>Month:</strong> {yearMap[slugObj.month]}
      </p>
    </div>
  );
}
