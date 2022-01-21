import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="container justify-center align-middle">
      <div
        dangerouslySetInnerHTML={{
          __html: `"<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQonOkUA8b_6MmCyEf0WXqU1qIbuWwnFLjviUv6URBneLkCMWyd5NeKvXGqQUwIMCsxD6CS3RJoiMso/pubhtml?widget=true&amp;headers=false"></iframe>"`,
        }}
      />
    </div>
  );
};

export default Calendar;
