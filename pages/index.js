import DonutChart from 'react-donut-chart';
import Head from 'next/head'
import Image from 'next/image'
import Avtar from '../public/account.png'
import plush from '../public/plush.svg'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css"
import { useEffect } from 'react';

const localizer = momentLocalizer(moment);

export default function Home() {

  useEffect(() => {
    const element = document.querySelector(".donutchart");
    element.innerHTML = `<defs>
      <linearGradient id="Gradient2"  x1="0%" y1="0%" x2="0%" y2="100%">
        <stop class="stop1" offset="60%"></stop>
        <stop class="stop3" offset="100%"></stop>
      </linearGradient>
      <style type="text/css">
        #rect2 { fill: url(#Gradient2); }
        .stop1 { stop-color: #ff7574; }
        .stop3 { stop-color: #ffa4a4; }
      </style>
      <linearGradient id="Gradient1"  x1="0%" y1="0%" x2="0%" y2="100%">
        <stop class="stop1" offset="60%"></stop>
        <stop class="stop3" offset="100%"></stop>
      </linearGradient>
      <style type="text/css">
        #rect1 { fill: url(#Gradient1); }
        .stop1 { stop-color: #453961; } 
        .stop3 { stop-color: #979ac2; }
      </style>
    </defs>` + element.innerHTML;
    const arc1 = document.querySelector(".donutchart-arcs-path");
    arc1.setAttribute('fill', 'url(#Gradient1)');
    arc1.setAttribute('stroke', '');
    // let score = 3;
    // const arc2 = document.querySelector('.donutchart-arcs-path:nth-child('+score+')');
    // arc2.setAttribute('fill', 'url(#Gradient2)');
    // arc2.setAttribute('stroke', '');
  }, [])

  return (
    <div className="bg-lightgray-current min-h-screen pb-4">
      <Head>
        <title>Test App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="grid grid-cols-12 py-4">
          <div className='col-span-5'>
              <h4 className='font-bold text-base'>Sessions Calendar</h4>
          </div>
          <div className='flex items-center col-span-7 justify-end'> 
            <a href="#" className=' bg-gradient-to-r from-pink-current to-pink-500 text-xs text-white p-1 mr-2 rounded'>Buy Sessions</a>
            <a href="#" className='flex items-center text-xs font-bold'><img src={plush.src} className='w-3 mr-1'></img>Add a Language</a>
          </div>
        </section>
        <section className='pt-2'>
          <h4 className='font-bold text-sm'>View CP Availability</h4>
          <div className='overflow-auto'>
            <div className='flex items-center w-scrollbarline pt-3'>
              <div className='flex items-center bg-white mr-3 px-2 py-1 rounded'>
                <img src={Avtar.src}></img>
                <div className='ml-3'>
                  <h3 className='font-bold'>Rakia</h3>
                  <p className='text-xs whitespace-nowrap text-lightgray-darkgray'>Your French CP</p>
                </div>
              </div>
              <div className='flex items-center bg-white mr-3 px-2 py-1 rounded'>
                <img src={Avtar.src}></img>
                <div className='ml-3'>
                  <h3 className='font-bold'>Rakia</h3>
                  <p className='text-xs whitespace-nowrap text-lightgray-darkgray'>Your French CP</p>
                </div>
              </div>
              <div className='flex items-center bg-white mr-3 px-2 py-1 rounded'>
                <img src={Avtar.src}></img>
                <div className='ml-3'>
                  <h3 className='font-bold'>Rakia</h3>
                  <p className='text-xs whitespace-nowrap text-lightgray-darkgray'>Your French CP</p>
                </div>
              </div>
              <div className='flex items-center bg-white mr-3 px-2 py-1 rounded'>
                <img src={Avtar.src}></img>
                <div className='ml-3'>
                  <h3 className='font-bold'>Rakia</h3>
                  <p className='text-xs whitespace-nowrap text-lightgray-darkgray'>Your French CP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='calendar-main' style={{ height: '450px'}}>
              <Calendar
                defaultView="week"
                events={[
                  {
                    allDay: false,
                    end: new Date('2021-12-12T06:26:58.461Z'),
                    start: new Date('2021-12-12T05:26:58.457Z'),
                    title: 'test'
                  },
                  {
                    allDay: false,
                    end: new Date('2021-12-11T04:30:00.000Z'),
                    start: new Date('2021-12-10T23:30:00.000Z'),
                    title: 'test larger'
                  },
                  {
                    allDay: false,
                    end: new Date('2021-12-11T17:30:00.000Z'),
                    start: new Date('2021-12-11T09:30:00.000Z'),
                    title: 'test larger'
                  },
                  {
                    allDay: true,
                    end: new Date('2021-12-11T18:30:00.000Z'),
                    start: new Date('2021-12-10T18:30:00.000Z'),
                    title: 'test all day'
                  },
                  {
                    allDay: true,
                    end: new Date('2021-12-12T18:30:00.000Z'),
                    start: new Date('2021-12-10T18:30:00.000Z'),
                    title: 'test 2 days'
                  },
                  {
                    allDay: false,
                    end: new Date('2021-12-14T10:26:58.464Z'),
                    start: new Date('2021-12-11T10:26:58.464Z'),
                    title: 'test multi-day'
                  }
                ]}
                defaultDate={moment().toDate()}
                localizer={localizer}
              />
        </div>
        <section className='bg-white rounded p-3 px-4 my-5'>
            <h4 className='font-bold mb-2'>4 Hours Remaining</h4>
            <p>Expires March 01,2023</p>
        </section>
        <div className='donutChart-wrappe bg-white rounded p-3 px-4 my-5 mb-4 overflow-hidden'>
          <p className='font-bold'>Chart</p>
          <div className='donutChart-mian'>
            <DonutChart
            data={[
            {
                label: 'Hours completed',
                value: 35
            },
            {
              label: 'Hours completed',
              value: 40,
              isEmpty: true
          },
            {
                label: 'Hours completed',
                value: 25,
            }]} />
            <div className='chart-text'>
                <p className='text-value'>34/38</p>
                <p className='hours-text'>Hours Completed</p>
            </div>
          </div>
          <div className='chart-detail flex justify-between w-full mt-4 pb-3'>
              <div className='flex items-center'>
                  <div className='bg-pink-current block p-1 rounded-full mr-2'></div>
                  <p>Hours <br/> Remaining</p>
              </div>
              <div className='flex items-center'>
                  <div className='bg-blue-current bg-pink-current block p-1 rounded-full mr-2'></div>
                  <p>Hours <br/> Completed <br/> (spanish)</p>
              </div>
              <div className='flex items-center'>
                  <div className='bg-gray-current block p-1 rounded-full mr-2'></div>
                  <p>Hours <br/>Completed <br/>(Arabic)</p>
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}
