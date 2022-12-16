import axios from 'axios';
import { url } from 'inspector';
import React, { useEffect, useState } from 'react';

interface Albums {
    artist_name: string;
    album_name: string;
    album_id: string;
    album_img: string;
}

// const baseURL: string = `https://api.spotify.com/v1/albums/`;
// const TOKEN: string = `BQDvBZP9mF-XI63kzHFRUcSCaqlE62QiS3cQPnVhq-eWAY0l4gtmh-Lcl2toxq1LEV6JttTd6b4I5uPzP3BHiA8txhKB07JuCFQaCuHoUDsq-zJPA-Tv1PQzQnNSHfQlp11MMvQQI0ZPig`;

export default function Music(): JSX.Element {
    const albums: Albums[] = [
        {
            artist_name: `Frank Ocean`,
            album_name: `Blonde`,
            album_id: `3mH6qwIy9crq0I9YQbOuDf`,
            album_img: `https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526`
        },
        {
            artist_name: `Kanye West`,
            album_name: `The College Dropout`,
            album_id: `4Uv86qWpGTxf7fU7lG5X6F`,
            album_img: `https://i.scdn.co/image/ab67616d00001e0225b055377757b3cdd6f26b78`
        },
        {
            artist_name: `Kendrick Lamar`,
            album_name: `good kid, m.A.A.d city`,
            album_id: `3DGQ1iZ9XKUQxAUWjfC34w`,
            album_img: `https://i.scdn.co/image/ab67616d00001e02d58e537cea05c2156792c53d`
        },
        {
            artist_name: `N*E*R*D`,
            album_name: `Seeing Sounds`,
            album_id: `20jWmZIMmIaclvShj8KSrB`,
            album_img: `https://i.scdn.co/image/ab67616d00001e022bcca9fe8ad40625bcd1fbf3`
        },
        {
            artist_name: `Nipsey Hussle`,
            album_name: `Victory Lap`,
            album_id: `3RZIk5CH4y187nGskxMrCf`,
            album_img: `https://i.scdn.co/image/ab67616d00001e02ac271e5d670e92c42bf99237`
        }
    ];

    return (
        <div className="flex flex-col gap-4 mt-5 max-w-2xl mx-auto">
            <h1 className="text-xl">Some of my favorite albums!</h1>
            {albums.map((album, index) => (
                <div
                    className="my-2 py-5 rounded-lg bg-[#ecebe2] flex flex-col justify-center"
                    key={`${album}-container-${index}`}
                >
                    {/* <span className="text-xl font-bold">
                        {album.album_name}
                    </span>
                    <br></br> */}
                    <img
                        src={album.album_img}
                        alt={`${album.album_name}-album-cover`}
                        className="mx-auto rounded-lg"
                    ></img>
                </div>
            ))}
        </div>
    );
}
