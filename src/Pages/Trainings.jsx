import React, { useState, useEffect, useContext } from "react";
import { getTrainings } from "../adapter";
import { TokenContext } from "../Components/TokenContext";
import TrainingCard from "../Components/TrainingCard";
import InfiniteScroll from "react-infinite-scroller";

export default function () {
  const token = useContext(TokenContext);
  const [trainings, setTrainings] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [part, setPart] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)

  const fetchTrainings = async () => {
    if (token) {
      const trainings = await getTrainings({
        token,
        offset: offset,
        limit: 10,
        order_by: orderBy,
        descending: false,
        tag: part,
      });

      if (trainings.length < 1) {
        setHasMore(false);
        return;
      }

      setTrainings((prev) => [...prev, ...trainings]);
      setOffset((prev) => prev + 10);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [token, orderBy]);

  const setOrderByName = () => {
    setOrderBy("name");
  };

  const setOrderByTimes = () => {
    setOrderBy("times");
  };

  const setOrderByLatest = () => {
    setOrderBy("latest");
  };

  const filter_train = (part) => {
    setPart(part)
  }

  console.log(trainings)


  return (
    <>
      <div className="font-bold text-slate-600">トレーニングの一覧</div>
      <button
        onClick={setOrderByName}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        名前順
      </button>
      <button
        onClick={setOrderByTimes}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        回数順
      </button>
      <button
        onClick={setOrderByLatest}
        className="rounded bg-blue-400 px-2 py-1 font-semibold text-white hover:bg-blue-500"
      >
        最近
      </button>

      <div>
        <button onClick={() => filter_train("胸")}>胸トレ</button>
        <div style={{ height: "600px", overflow: "scroll" }}>
          <InfiniteScroll
            loadMore={() => fetchTrainings()}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>読み込んでるよん...</div>}
            threshold={-1}
            useWindow={false}
            >

            {trainings.map((training) => (
              <TrainingCard training={training} />
            ))}

          </InfiniteScroll>
        </div>

      </div>

    </>
  );
}
