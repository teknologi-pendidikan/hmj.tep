import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="container justify-center align-middle">
      <div
        dangerouslySetInnerHTML={{
          __html: `"<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQonOkUA8b_6MmCyEf0WXqU1qIbuWwnFLjviUv6URBneLkCMWyd5NeKvXGqQUwIMCsxD6CS3RJoiMso/pubhtml?widget=true&amp;headers=false" style="border:0px #ffffff none;" name="Sistem Informasi Utama" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe><div style="position: absolute;width: 72%;bottom: 1px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.2;font-size: 0px;background: #fff;"><a href="https://included.cc/">included.cc</a></small></div><style>.boxes2{height:212px;width:316px;} #new img{max-width:none!important;background:none!important}#iframe{max-height:none!important;max-width:none!important;background:none!important}</style></div>"`,
        }}
      />
    </div>
  );
};

export default Calendar;
