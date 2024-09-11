import * as date_en from '../i18n/dateConstants_en';
import * as date_fr from '../i18n/dateConstants_fr';
import { useLanguage } from '../components/ReusableComponents/LanguageToggler/LanguageContext';

/** 
 * GetExpTimeString : return the working time in string
 * isToday : return if a date is today's date
 * differenceInMonths : return the differnce in month between 2 dates
 * differenceInYears : return the differnce in years between 2 dates
 * getMonthString : return the month in string
*/

function GetExpTimeString(date1, date2, displayMonth=true, displayTime=true, displayPresent=true){

    const { language } = useLanguage();
    const dateConst = language === 'en' ? date_en : date_fr;

    const monthDiff = differenceInMonths(date1, date2) + 1;
    const yearDiff = differenceInYears(date1, date2);

    var timePeriod = "";

    var startMonth = GetMonthString(date2.getMonth());
    var startYear = date2.getFullYear();
    var endMonth = GetMonthString(date1.getMonth());
    var endYear = date1.getFullYear();

    if(!displayMonth){
      startMonth = "";
      endMonth = "";
    }

    if(!displayTime){
      timePeriod = "";
    }else if(monthDiff < 12){
      timePeriod = " • " + monthDiff + " " + dateConst.MONTHS;
    }else if(monthDiff%12 === 0){
      let years = monthDiff/12;
      timePeriod = " • " + years + " " + dateConst.YEARS;
    }else if(monthDiff % 12 >= 1){
      let months = monthDiff % 12;
      timePeriod = " • " + yearDiff + " " + dateConst.YEARS + months + " " + dateConst.MONTHS;
    }

    if(isToday(date1) && displayPresent){
      endMonth = dateConst.PRESENT;
      endYear = "";
    }

    return startMonth + " " +   startYear + " - " + endMonth + " " + endYear + timePeriod;
  }


/*from: https://flaviocopes.com/how-to-determine-date-is-today-javascript/*/
function isToday(date){

    const today = new Date()

    return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  }
  
  /*from : https://codingbeautydev.com/blog/javascript-get-number-of-months-between-two-dates/*/
  function differenceInMonths(date1, date2) {
    const monthDiff = date1.getMonth() - date2.getMonth();
    const yearDiff = date1.getYear() - date2.getYear();

    return (monthDiff + yearDiff * 12);
  }

  function differenceInYears(date1, date2) {
    const yearDiff = date1.getYear() - date2.getYear();

    return yearDiff;
  }

  function GetMonthString(month){
    const { language } = useLanguage();
    const dateConst = language === 'en' ? date_en : date_fr;

    switch(month){
      case 0: return dateConst.JANUARY;
      case 1: return dateConst.FEBRUARY;
      case 2: return dateConst.MARCH;
      case 3: return dateConst.APRIL;
      case 4: return dateConst.MAY;
      case 5: return dateConst.JUNE;
      case 6: return dateConst.JULY;
      case 7: return dateConst.AUGUST;
      case 8: return dateConst.SEPTEMBER;
      case 9: return dateConst.OCTOBER;
      case 10: return dateConst.NOVEMBER;
      case 11: return dateConst.DECEMBER;
      default: return "";
    }

  }

  export default GetExpTimeString
  