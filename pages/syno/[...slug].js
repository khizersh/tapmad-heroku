import React,{useEffect ,useState} from 'react'
import { useRouter } from 'next/router';
import CategoryDetail from '../../modules/category/CategoryDetail';
import { manipulateUrls  } from "../../services/utils";
import { get  } from "../../services/http-service";

const  Syno = () => {
    const [videoList, setVideoList] = useState([]);
    const [video, setVideo] = useState(null);
    const router = useRouter();

    useEffect(() => {
      if (router && router.query) {
        getChannelData(router.query);
      }
    }, [router.query]);
  
    async function getChannelData(query) {
      if (query && query.slug) {
        let seriesDetail = manipulateUrls(router.query);
        getVideosByCategory(seriesDetail.OriginalMovieId , seriesDetail.isChannel );
      }
    }


    const getVideosByCategory = async (id , isChannel) => {
        const data = await get(
          `https://api.tapmad.com/api/getRelatedChannelsOrVODs/V1/en/web/${id}/${isChannel}`
        );
    
        if(data?.data?.Response?.responseCode){
              setVideo(data?.data?.Video)
              setVideoList(data?.data?.Sections)
        }
    
      };
    return (
        <div className="container-fluid">
        <CategoryDetail video={video} videoList={videoList} />
      </div>
    )
}

export default Syno;
