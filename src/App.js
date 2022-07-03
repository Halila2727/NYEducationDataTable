import "./styles.css";
import education_data from "./education_data.js";

export default function App() {
  let rows = [];

  for (let school of education_data) {
    rows.push(
      <tr>
        <td> {school.AGGREGATION_NAME} </td>
        <td> {school.ENROLL_CNT} </td>
        <td> {school.GRAD_CNT} </td>
        <td> {school.GRAD_PCT} </td>
        <td> {school.LOCAL_CNT} </td>
        <td> {school.LOCAL_PCT} </td>
        <td> {school.REG_CNT} </td>
        <td> {school.REG_PCT} </td>
        <td> {school.REG_ADV_CNT} </td>
        <td> {school.REG_ADV_PCT} </td>
        <td> {school.NON_DIPLOMA_CREDENTIAL_CNT} </td>
        <td> {school.NON_DIPLOMA_CREDENTIAL_PCT} </td>
        <td> {school.STILL_ENR_CNT} </td>
        <td> {school.STILL_ENR_PCT} </td>
        <td> {school.DROPOUT_CNT} </td>
        <td> {school.DROPOUT_PCT} </td>
      </tr>
    );
  }

  return (
    <div className="App">
      <div heading="heading">
        <h1> New York Graduation Rates </h1>
        <table>
          <th>Schools </th>
          <th> Enrollment </th>
          <th> Graduated </th>
          <th> Percent Graduated </th>
          <th> Local Diplomas </th>
          <th> Percent Local Diplomas </th>
          <th> Regents Diplomas </th>
          <th> Percent Regents Diplomas </th>
          <th> Advanced Regents Diplomas </th>
          <th> Percent Advanced Regents Diplomas </th>
          <th> Non-Diplomas </th>
          <th> Percent Non-Diplomas </th>
          <th> Still Enrolled </th>
          <th> Percent Still Enrolled </th>
          <th>Dropouts </th>
          <th> Percent Dropouts </th>
          {rows}
        </table>
      </div>
    </div>
  );
}
