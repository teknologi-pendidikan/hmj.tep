import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="container justify-center align-middle">
      <div
        dangerouslySetInnerHTML={{
          __html: `"<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQonOkUA8b_6MmCyEf0WXqU1qIbuWwnFLjviUv6URBneLkCMWyd5NeKvXGqQUwIMCsxD6CS3RJoiMso/pubhtml" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="720px" width="1280px" allowfullscreen></iframe>"`,
        }}
      />
    </div>
  );
};

export default Calendar;
