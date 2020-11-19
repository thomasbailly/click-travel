<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div>
      <h1 class="title">Visuel du ticket</h1>
      <!-- {{ ticket }} -->
      <div class="box">
        <div class="clip"></div>
        <ul class="left">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <ul class="right">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div class="ticket">
          <span class="airline">{{ ticket.class }}</span>
          <span class="airline airlineslip">{{ ticket.class }}</span>
          <span class="boarding">Boarding pass</span>
          <div class="content">
            <span class="jfk">{{ ticket.from }}</span>
            <span class="plane">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                height="60"
                width="60"
                image-rendering="optimizeQuality"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#222">
                  <line
                    fill="none"
                    stroke-linecap="round"
                    stroke-width="30"
                    x1="300"
                    x2="55"
                    y1="390"
                    y2="390"
                  />
                  <path
                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                    fill="#222"
                    stroke-linejoin="round"
                    stroke-width="10"
                  />
                </g>
              </svg>
            </span>
            <span class="sfo">{{ ticket.to }}</span>

            <span class="jfk jfkslip">{{ ticket.from }}</span>
            <span class="plane planeslip"
              ><svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                height="50"
                width="50"
                image-rendering="optimizeQuality"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#222">
                  <line
                    fill="none"
                    stroke-linecap="round"
                    stroke-width="30"
                    x1="300"
                    x2="55"
                    y1="390"
                    y2="390"
                  />
                  <path
                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                    fill="#222"
                    stroke-linejoin="round"
                    stroke-width="10"
                  />
                </g>
              </svg>
            </span>
            <span class="sfo sfoslip">{{ ticket.to }}</span>
            <div class="sub-content">
              <span class="watermark">Postsnap</span>
              <span class="name"
                >PASSENGER NAME<br /><span>{{ ticket.passenger }}</span></span
              >
              <span class="flight"
                >FLIGHT<br /><span>{{ ticket.flight }}</span></span
              >
              <span class="gate"
                >GATE<br /><span>{{ ticket.gate }}</span></span
              >
              <span class="seat"
                >SEAT<br /><span>{{ ticket.seat }}</span></span
              >
              <span class="boardingtime"
                >TIME<br /><span>{{
                  ticket.time.substring(
                    ticket.time.length - 5,
                    ticket.time.length
                  )
                }}</span></span
              >
              <span class="codebar"
                ><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cfsKn1MWWQ5acSqOhOLDQDAHnaac4xinw&usqp=CAU"
                  alt="image"
                  width="150px"
                  height="40px"
              /></span>

              <span class="fromDestination"
                >FROM<br /><span>{{ ticket.from }}</span></span
              >
              <span class="toDestination"
                >TO<br /><span>{{ ticket.to }}</span></span
              >
              <span class="classTicket"
                >Class<br /><span>{{ ticket.class }}</span></span
              >

              <span class="gate gateslip"
                >GATE<br /><span>{{ ticket.gate }}</span></span
              >
              <span class="boardingtime timeslip"
                >TIME<br /><span>{{
                  ticket.time.substring(
                    ticket.time.length - 5,
                    ticket.time.length
                  )
                }}</span></span
              >
              <span class="seat seatslip"
                >SEAT<br /><span>{{ ticket.seat }}</span></span
              >
              <span class="name nameslip"
                >PASSENGER NAME<br /><span>{{ ticket.passenger }}</span></span
              >
              <span class="codebar codebarslip"
                ><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cfsKn1MWWQ5acSqOhOLDQDAHnaac4xinw&usqp=CAU"
                  alt="image"
                  width="150px"
                  height="40px"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params }) {
    await store.dispatch('tickets/loadTicket', params.id)
  },
  computed: {
    ...mapGetters({
      ticket: 'tickets/getTicket',
    }),
  },
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: #fff;
}

.box {
  position: absolute;
  top: calc(50% - 125px);
  top: -webkit-calc(50% - 125px);
  left: calc(50% - 300px);
  left: -webkit-calc(50% - 300px);
  -webkit-transform: scale(0.7) rotate(-5deg);
}
.clip {
  width: 20px;
  height: 50px;
  border: solid 3px #666;
  border-width: 3px 3px 0 0;
  margin: auto;
  border-radius: 1000px 1000px 00;
  position: absolute;
  left: 162px;
  box-sizing: border-box;
  top: -35px;
}

.clip:before {
  content: '';
  position: absolute;
  border: solid 3px #666;
  border-radius: 1000px 1000px 0 0;
  border-width: 3px 0 0 3px;
  top: -3px;
  right: 0;
  width: 100%;
  height: 150%;
  display: block;
  box-sizing: border-box;
  z-index: -2;
}

.clip:after {
  content: '';
  position: absolute;
  border: solid 3px #666;
  border-radius: 0 0 1000px 1000px;
  border-width: 0 3px 3px;
  top: 40%;
  right: -3px;
  width: 80%;
  height: 140%;
  display: block;
  box-sizing: border-box;
  z-index: 1;
}
.ticket {
  width: 600px;
  height: 250px;
  background: #37a7dd;
  border-radius: 3px;
  box-shadow: 0 0 100px #aaa;
}

.left {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0px;
  left: -5px;
}

.left li {
  width: 0px;
  height: 0px;
}

.left li:nth-child(-n + 2) {
  margin-top: 8px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #ff0083;
}

.left li:nth-child(3),
.left li:nth-child(6) {
  margin-top: 8px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #eeeeee;
}

.left li:nth-child(4) {
  margin-top: 8px;
  margin-left: 2px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #eeeeee;
}

.left li:nth-child(5) {
  margin-top: 8px;
  margin-left: -1px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #eeeeee;
}

.left li:nth-child(7),
.left li:nth-child(9),
.left li:nth-child(11),
.left li:nth-child(12) {
  margin-top: 7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #e5e5e5;
}

.left li:nth-child(8) {
  margin-top: 7px;
  margin-left: 2px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #e5e5e5;
}

.left li:nth-child(10) {
  margin-top: 7px;
  margin-left: 1px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #e5e5e5;
}

.left li:nth-child(13) {
  margin-top: 7px;
  margin-left: 2px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #ff0083;
}

.left li:nth-child(14) {
  margin-top: 7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #ff0083;
}

.right {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0px;
  right: -5px;
}

.right li:nth-child(-n + 2) {
  margin-top: 8px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #ff0083;
}

.right li:nth-child(3),
.right li:nth-child(4),
.right li:nth-child(6) {
  margin-top: 8px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #eeeeee;
}

.right li:nth-child(5) {
  margin-top: 8px;
  margin-left: -2px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #eeeeee;
}

.right li:nth-child(8),
.right li:nth-child(9),
.right li:nth-child(11) {
  margin-top: 7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #e5e5e5;
}

.right li:nth-child(7) {
  margin-top: 7px;
  margin-left: -3px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #e5e5e5;
}

.right li:nth-child(10) {
  margin-top: 7px;
  margin-left: -2px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #e5e5e5;
}

.right li:nth-child(12) {
  margin-top: 7px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #e5e5e5;
}

.right li:nth-child(13),
.right li:nth-child(14) {
  margin-top: 7px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #ff0083;
}

.ticket:after {
  content: '';
  position: absolute;
  right: 200px;
  top: 0px;
  width: 2px;
  height: 250px;
  box-shadow: inset 0 0 0 #ffffff, inset 0 -10px 0 #999999,
    inset 0 -20px 0 #ff0083, inset 0 -30px 0 #999999, inset 0 -40px 0 #ff0083,
    inset 0 -50px 0 #999999, inset 0 -60px 0 #e5e5e5, inset 0 -70px 0 #999999,
    inset 0 -80px 0 #e5e5e5, inset 0 -90px 0 #999999, inset 0 -100px 0 #e5e5e5,
    inset 0 -110px 0 #999999, inset 0 -120px 0 #e5e5e5, inset 0 -130px 0 #999999,
    inset 0 -140px 0 #e5e5e5, inset 0 -150px 0 #b0b0b0, inset 0 -160px 0 #eeeeee,
    inset 0 -170px 0 #b0b0b0, inset 0 -180px 0 #eeeeee, inset 0 -190px 0 #b0b0b0,
    inset 0 -200px 0 #eeeeee, inset 0 -210px 0 #b0b0b0, inset 0 -220px 0 #ff0083,
    inset 0 -230px 0 #999999, inset 0 -240px 0 #ff0083, inset 0 -250px 0 #999999;
}

.content {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 170px;
  background: #eee;
}

.airline {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial;
  font-size: 20px;
  color: white;
}

.boarding {
  position: absolute;
  top: 10px;
  right: 220px;
  font-family: Arial;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

.jfk {
  position: absolute;
  top: 0px;
  left: 20px;
  font-family: Arial;
  font-size: 38px;
  color: #222;
}

.sfo {
  position: absolute;
  top: 0px;
  left: 180px;
  font-family: Arial;
  font-size: 38px;
  color: #222;
}

.plane {
  position: absolute;
  left: 105px;
  top: -10px;
}

.sub-content {
  background: #e5e5e5;
  width: 100%;
  height: 140px;
  position: absolute;
  top: 40px;
}

.watermark {
  position: absolute;
  left: 5px;
  top: -10px;
  font-family: Arial;
  font-size: 110px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.2);
}

.name {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.name span {
  color: #555;
  font-size: 17px;
}

.flight {
  position: absolute;
  top: 50px;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.flight span {
  color: #555;
  font-size: 17px;
}

.gate {
  position: absolute;
  top: 100px;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.gate span {
  color: #555;
  font-size: 17px;
}

.seat {
  position: absolute;
  top: 100px;
  left: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.seat span {
  color: #555;
  font-size: 17px;
}

.codebar {
  position: absolute;
  top: 100px;
  left: 200px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.codebar span {
  color: #555;
  font-size: 17px;
}

.boardingtime {
  position: absolute;
  top: 100px;
  left: 50px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}
.fromDestination {
  position: absolute;
  top: 50px;
  left: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}
.fromDestination span {
  color: #555;
  font-size: 17px;
}

.toDestination {
  position: absolute;
  top: 50px;
  left: 200px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}
.toDestination span {
  color: #555;
  font-size: 17px;
}

.classTicket {
  position: absolute;
  top: 50px;
  left: 300px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}
.classTicket span {
  color: #555;
  font-size: 17px;
}

.boardingtime span {
  color: #555;
  font-size: 17px;
}

.barcode {
  position: absolute;
  left: 8px;
  bottom: 6px;
  height: 30px;
  width: 90px;
  background: #222;
  box-shadow: inset 0 1px 0 #ffb300, inset -2px 0 0 #ffb300, inset -4px 0 0 #222,
    inset -5px 0 0 #ffb300, inset -6px 0 0 #222, inset -9px 0 0 #ffb300,
    inset -12px 0 0 #222, inset -13px 0 0 #ffb300, inset -14px 0 0 #222,
    inset -15px 0 0 #ffb300, inset -16px 0 0 #222, inset -17px 0 0 #ffb300,
    inset -19px 0 0 #222, inset -20px 0 0 #ffb300, inset -23px 0 0 #222,
    inset -25px 0 0 #ffb300, inset -26px 0 0 #222, inset -26px 0 0 #ffb300,
    inset -27px 0 0 #222, inset -30px 0 0 #ffb300, inset -31px 0 0 #222,
    inset -33px 0 0 #ffb300, inset -35px 0 0 #222, inset -37px 0 0 #ffb300,
    inset -40px 0 0 #222, inset -43px 0 0 #ffb300, inset -44px 0 0 #222,
    inset -45px 0 0 #ffb300, inset -46px 0 0 #222, inset -48px 0 0 #ffb300,
    inset -49px 0 0 #222, inset -50px 0 0 #ffb300, inset -52px 0 0 #222,
    inset -54px 0 0 #ffb300, inset -55px 0 0 #222, inset -57px 0 0 #ffb300,
    inset -59px 0 0 #222, inset -61px 0 0 #ffb300, inset -64px 0 0 #222,
    inset -66px 0 0 #ffb300, inset -67px 0 0 #222, inset -68px 0 0 #ffb300,
    inset -69px 0 0 #222, inset -71px 0 0 #ffb300, inset -72px 0 0 #222,
    inset -73px 0 0 #ffb300, inset -75px 0 0 #222, inset -77px 0 0 #ffb300,
    inset -80px 0 0 #222, inset -82px 0 0 #ffb300, inset -83px 0 0 #222,
    inset -84px 0 0 #ffb300, inset -86px 0 0 #222, inset -88px 0 0 #ffb300,
    inset -89px 0 0 #222, inset -90px 0 0 #ffb300;
}

.slip {
  left: 455px;
}

.nameslip {
  top: 10px;
  left: 410px;
}
.gateslip {
  top: 60px;
  left: 410px;
}
.timeslip {
  top: 60px;
  left: 480px;
}

.flightslip {
  top: 60px;
  left: 410px;
}

.seatslip {
  top: 60px;
  left: 540px;
}
.codebarslip {
  top: 100px;
  left: 410px;
}

.jfkslip {
  font-size: 30px;
  top: 00px;
  left: 410px;
}

.sfoslip {
  font-size: 30px;
  top: 0px;
  left: 530px;
}

.planeslip {
  top: -10px;
  left: 475px;
}

.airlineslip {
  left: 455px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
