import React, { useEffect, useState } from "react";
import { getNewsById } from "../../modules/news/news.service";
import NewsDetailCard from "../../modules/news/NewsDetailCard";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";

const NewsDetail = ({ id , data }) => {
  const [news, setNews] = useState(null);

  useEffect(async () => {
    if (id) {
      if (data && data.responseCode == 1) {
        setNews(data.data.TnnNews);
      }
    }
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="pl-5 my-3">
        <DFPSlotsProvider dfpNetworkId="28379801">
          <div className="desktop-ads d-none d-lg-block d-md-block">
            <AdSlot sizes={[[728, 90]]} adUnit={"Tapmad_LB_BTF"} />
          </div>
          <div className="desktops-ads text-center d-lg-none d-md-none">
            <AdSlot
              sizes={[[320, 100]]}
              adUnit={"Testing_Dev_MW_320x100_Player"}
            />
          </div>
        </DFPSlotsProvider>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-8 col-lg-8">
          {news && <NewsDetailCard news={news} />}
        </div>
        <div className=" col-12 col-sm-4 col-md-12 col-lg-4 pl-3 pl-sm-3 pl-md-3 pl-lg-0">
          <div className="text-center">
            <DFPSlotsProvider dfpNetworkId="28379801">
              <div className="desktop-ads">
                <AdSlot sizes={[[300, 250]]} adUnit={"Tapmad_MREC_2_Desktop"} />
              </div>
            </DFPSlotsProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

export async function getServerSideProps(context) {
  let id = "";
  if (context.query) {
    id = context.query.slug[0];
  }

  const data = await getNewsById(id);
  if(data && data.responseCode == 1){
    return {
      props: { id: id, data: data },
    };
  }
  return {
    props: { id: id, data: null },
  };
}
