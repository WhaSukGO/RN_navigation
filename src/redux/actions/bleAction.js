import { GET_BLE, UPDATE_BLE, CLEAR_BLE } from "./types";

export const clearBLE = (idx) => {
  return { type: GET_BLE, payload: idx };
};

export const updateBLE = (res) => {
  return { type: UPDATE_BLE, payload: res };
};

// export const clearBLE = () => {
//   return { type: CLEAR_BLE };
// };

// export const clearError = () => {
//   return {type: CLEAR_ERR_RS};
// };

// export const getReservations = ({USER_SN}) => async (dispatch) => {
//   setLoading();

//   API.post('service/getReservationListByUser', {USER_SN})
//     .then((res) => {
//       const reservations = res.data.result.reduce((acc, cur, i) => {
//         if (acc[cur.CONTRACT_SN] === undefined) {
//           acc[cur.CONTRACT_SN] = [cur];
//         } else {
//           acc[cur.CONTRACT_SN].push(cur);
//         }
//         return acc;
//       }, {});

//       dispatch({type: GET_RESERVATIONS, payload: reservations});
//     })
//     .catch((err) => {
//       dispatch({type: RESERVATION_ERROR, payload: err});
//     });
// };

// export const getFixerReservations = ({reservations, FIXER_SN}) => async (
//   dispatch,
// ) => {
//   setLoading();

//   const pending = {};
//   const accepted = {};
//   const finished = {};
//   const canceled = {};

//   const filtered = reservations.filter(
//     (reservation) => reservation.FIXER_SN === FIXER_SN,
//   );

//   filtered.forEach((res) => {
//     const {RESERVATION_STATUS_CD, CONTRACT_SN} = res;

//     if (RESERVATION_STATUS_CD === '001') {
//       pending[CONTRACT_SN] = res;
//     } else if (RESERVATION_STATUS_CD === '002') {
//       if (canceled[CONTRACT_SN] === undefined) {
//         canceled[CONTRACT_SN] = [res];
//       } else {
//         canceled[CONTRACT_SN].push(res);
//       }
//     } else if (RESERVATION_STATUS_CD === '003') {
//       accepted[CONTRACT_SN] = res;
//     } else {
//       finished[CONTRACT_SN] = res;
//     }
//   });

//   dispatch({
//     type: GET_FIXER_RESERVATIONS,
//     payload: {pending, accepted, finished, canceled},
//   });
// };

// export const createReservation = ({reservation, USER_SN}) => async (
//   dispatch,
// ) => {
//   API.post('service/saveReservationData', reservation)
//     .then((res) => {
//       const {result} = res.data;

//       dispatch({
//         type: CREATE_RESERVATION,
//         payload: result,
//       });
//     })

//     .catch((err) => {
//       dispatch({
//         type: RESERVATION_ERROR,
//         payload: err,
//       });
//     });
// };

// export const UpdateReservation = ({
//   RESERVATION_SN,
//   CONTRACT_SN,
//   RESERVATION_STATUS_CD,
// }) => async (dispatch) => {
//   API.post('service/saveReservationData', {
//     RESERVATION_SN,
//     CONTRACT_SN,
//     TYPE: 1,
//     RESERVATION_STATUS_CD,
//   })
//     .then((res) => {
//       let type =
//         RESERVATION_STATUS_CD === '002'
//           ? CANCEL_RESERVATION
//           : FINISH_RESERVATION;

//       dispatch({
//         type,
//         payload: {RESERVATION_SN, CONTRACT_SN},
//       });
//     })

//     .catch((err) => {
//       dispatch({
//         type: RESERVATION_ERROR,
//         payload: err,
//       });
//     });
// };

// export const denyReservation = ({RESERVATION_SN, CONTRACT_SN}) => async (
//   dispatch,
// ) => {
//   API.post('service/saveReservationData', {
//     RESERVATION_SN,
//     CONTRACT_SN,
//     TYPE: 1,
//     RESERVATION_STATUS_CD: '002',
//   })
//     .then((res) => {
//       dispatch({
//         type: DENY_RESERVATION,
//         payload: {RESERVATION_SN, CONTRACT_SN},
//       });
//     })

//     .catch((err) => {
//       dispatch({
//         type: RESERVATION_ERROR,
//         payload: err,
//       });
//     });
// };
