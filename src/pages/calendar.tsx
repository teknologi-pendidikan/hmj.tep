import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="container justify-center align-middle">
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://calendar.google.com/calendar/embed?height=720&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FJakarta&mode=MONTH&hl=id&showNav=1&src=Y19zMzNwbjA3bTNibTNpaTMxZmM0OGJodnJpa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00" style="border-width:0" width="1280" height="720" frameborder="0" scrolling="no"></iframe>"`,
        }}
      />
    </div>
  );
};

export default Calendar;
