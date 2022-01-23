import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="container justify-center align-middle">
      <div
        dangerouslySetInnerHTML={{
          __html: `"<iframe width="1280" height="720" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=112.61144042015077%2C-7.964080021526924%2C112.62341380119325%2C-7.957609127535522&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=17/-7.96084/112.61743">View Larger Map</a></small>"`,
        }}
      />
    </div>
  );
};

export default Calendar;
