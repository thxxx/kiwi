import {useState, useEffect} from 'react';
import Seo from '../components/Seo'
import {dbService} from '../src/tools/fbase'
import {useRouter} from 'next/router'

const Made = () => {
  const [ item, setItem ] = useState();
  const [ loading, setLoading ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    let userOrder = []
    userOrder = await dbService
        .collection("published-page")
        .where("urlId", "==", 'mercury')
        .get(); // uid를 creatorId로 줬었으니까.
    
    let orderData = userOrder.docs.map(doc => {
        return({...doc.data(), id:doc.id})
    });
    
    if(orderData.length === 0){
        props.history.push('/');
        props.history.go();
    }

    setItem( orderData[0] );
    setLoading( false );
    console.log(orderData)
}

  return (
    <div>
      <Seo title={item ? item.setting.title : "서피의 페이지" } />
      메이드

      <style jsx>{`
        a {
          color:blue;
        }
      `}
      </style>
    </div>    
  );
};

export default Made;