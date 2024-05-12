import { Await, useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import "./listPage.scss";
import React from "react";

const ListPage = () => {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wraper">
          <Filter />
          <React.Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </React.Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <React.Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </React.Suspense>
      </div>
    </div>
  );
};

export default ListPage;
