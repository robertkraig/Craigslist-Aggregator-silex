var usStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

function findStateName(name)
{
   for(var i in usStates)
   {
      if(usStates[i].name == name.toUpperCase())
         return usStates[i].abbreviation;
   }
   return 'N/A';
}

var locations = [
   {
      "name":"Alabama",
      "records":[
         {
            "name":"auburn",
            "url":"http://auburn.craigslist.org"
         },
         {
            "name":"birmingham",
            "url":"http://bham.craigslist.org"
         },
         {
            "name":"dothan",
            "url":"http://dothan.craigslist.org"
         },
         {
            "name":"florence / muscle shoals",
            "url":"http://shoals.craigslist.org"
         },
         {
            "name":"gadsden-anniston",
            "url":"http://gadsden.craigslist.org"
         },
         {
            "name":"huntsville / decatur",
            "url":"http://huntsville.craigslist.org"
         },
         {
            "name":"mobile",
            "url":"http://mobile.craigslist.org"
         },
         {
            "name":"montgomery",
            "url":"http://montgomery.craigslist.org"
         },
         {
            "name":"tuscaloosa",
            "url":"http://tuscaloosa.craigslist.org"
         }
      ]
   },
   {
      "name":"Alaska",
      "records":[
         {
            "name":"anchorage / mat-su",
            "url":"http://anchorage.craigslist.org"
         },
         {
            "name":"fairbanks",
            "url":"http://fairbanks.craigslist.org"
         },
         {
            "name":"kenai peninsula",
            "url":"http://kenai.craigslist.org"
         },
         {
            "name":"southeast alaska",
            "url":"http://juneau.craigslist.org"
         }
      ]
   },
   {
      "name":"Arizona",
      "records":[
         {
            "name":"flagstaff / sedona",
            "url":"http://flagstaff.craigslist.org"
         },
         {
            "name":"mohave county",
            "url":"http://mohave.craigslist.org"
         },
         {
            "name":"phoenix",
            "url":"http://phoenix.craigslist.org"
         },
         {
            "name":"prescott",
            "url":"http://prescott.craigslist.org"
         },
         {
            "name":"show low",
            "url":"http://showlow.craigslist.org"
         },
         {
            "name":"sierra vista",
            "url":"http://sierravista.craigslist.org"
         },
         {
            "name":"tucson",
            "url":"http://tucson.craigslist.org"
         },
         {
            "name":"yuma",
            "url":"http://yuma.craigslist.org"
         }
      ]
   },
   {
      "name":"Arkansas",
      "records":[
         {
            "name":"fayetteville ",
            "url":"http://fayar.craigslist.org"
         },
         {
            "name":"fort smith",
            "url":"http://fortsmith.craigslist.org"
         },
         {
            "name":"jonesboro",
            "url":"http://jonesboro.craigslist.org"
         },
         {
            "name":"little rock",
            "url":"http://littlerock.craigslist.org"
         },
         {
            "name":"texarkana",
            "url":"http://texarkana.craigslist.org"
         }
      ]
   },
   {
      "name":"California",
      "records":[
         {
            "name":"bakersfield",
            "url":"http://bakersfield.craigslist.org"
         },
         {
            "name":"chico",
            "url":"http://chico.craigslist.org"
         },
         {
            "name":"fresno / madera",
            "url":"http://fresno.craigslist.org"
         },
         {
            "name":"gold country",
            "url":"http://goldcountry.craigslist.org"
         },
         {
            "name":"hanford-corcoran",
            "url":"http://hanford.craigslist.org"
         },
         {
            "name":"humboldt county",
            "url":"http://humboldt.craigslist.org"
         },
         {
            "name":"imperial county",
            "url":"http://imperial.craigslist.org"
         },
         {
            "name":"inland empire",
            "url":"http://inlandempire.craigslist.org"
         },
         {
            "name":"los angeles",
            "url":"http://losangeles.craigslist.org"
         },
         {
            "name":"mendocino county",
            "url":"http://mendocino.craigslist.org"
         },
         {
            "name":"merced",
            "url":"http://merced.craigslist.org"
         },
         {
            "name":"modesto",
            "url":"http://modesto.craigslist.org"
         },
         {
            "name":"monterey bay",
            "url":"http://monterey.craigslist.org"
         },
         {
            "name":"orange county",
            "url":"http://orangecounty.craigslist.org"
         },
         {
            "name":"palm springs",
            "url":"http://palmsprings.craigslist.org"
         },
         {
            "name":"redding",
            "url":"http://redding.craigslist.org"
         },
         {
            "name":"sacramento",
            "url":"http://sacramento.craigslist.org"
         },
         {
            "name":"san diego",
            "url":"http://sandiego.craigslist.org"
         },
         {
            "name":"san francisco bay area",
            "url":"http://sfbay.craigslist.org"
         },
         {
            "name":"san luis obispo",
            "url":"http://slo.craigslist.org"
         },
         {
            "name":"santa barbara",
            "url":"http://santabarbara.craigslist.org"
         },
         {
            "name":"santa maria",
            "url":"http://santamaria.craigslist.org"
         },
         {
            "name":"siskiyou county",
            "url":"http://siskiyou.craigslist.org"
         },
         {
            "name":"stockton",
            "url":"http://stockton.craigslist.org"
         },
         {
            "name":"susanville",
            "url":"http://susanville.craigslist.org"
         },
         {
            "name":"ventura county",
            "url":"http://ventura.craigslist.org"
         },
         {
            "name":"visalia-tulare",
            "url":"http://visalia.craigslist.org"
         },
         {
            "name":"yuba-sutter",
            "url":"http://yubasutter.craigslist.org"
         }
      ]
   },
   {
      "name":"Colorado",
      "records":[
         {
            "name":"boulder",
            "url":"http://boulder.craigslist.org"
         },
         {
            "name":"colorado springs",
            "url":"http://cosprings.craigslist.org"
         },
         {
            "name":"denver",
            "url":"http://denver.craigslist.org"
         },
         {
            "name":"eastern CO",
            "url":"http://eastco.craigslist.org"
         },
         {
            "name":"fort collins / north CO",
            "url":"http://fortcollins.craigslist.org"
         },
         {
            "name":"high rockies",
            "url":"http://rockies.craigslist.org"
         },
         {
            "name":"pueblo",
            "url":"http://pueblo.craigslist.org"
         },
         {
            "name":"western slope",
            "url":"http://westslope.craigslist.org"
         }
      ]
   },
   {
      "name":"Connecticut",
      "records":[
         {
            "name":"eastern CT",
            "url":"http://newlondon.craigslist.org"
         },
         {
            "name":"hartford",
            "url":"http://hartford.craigslist.org"
         },
         {
            "name":"new haven",
            "url":"http://newhaven.craigslist.org"
         },
         {
            "name":"northwest CT",
            "url":"http://nwct.craigslist.org"
         }
      ]
   },
   {
      "name":"Delaware",
      "records":[
         {
            "name":"delaware",
            "url":"http://delaware.craigslist.org"
         }
      ]
   },
   {
      "name":"District of Columbia",
      "records":[
         {
            "name":"washington",
            "url":"http://washingtondc.craigslist.org"
         }
      ]
   },
   {
      "name":"Florida",
      "records":[
         {
            "name":"daytona beach",
            "url":"http://daytona.craigslist.org"
         },
         {
            "name":"florida keys",
            "url":"http://keys.craigslist.org"
         },
         {
            "name":"fort lauderdale",
            "url":"http://fortlauderdale.craigslist.org"
         },
         {
            "name":"ft myers / SW florida",
            "url":"http://fortmyers.craigslist.org"
         },
         {
            "name":"gainesville",
            "url":"http://gainesville.craigslist.org"
         },
         {
            "name":"heartland florida",
            "url":"http://cfl.craigslist.org"
         },
         {
            "name":"jacksonville",
            "url":"http://jacksonville.craigslist.org"
         },
         {
            "name":"lakeland",
            "url":"http://lakeland.craigslist.org"
         },
         {
            "name":"north central FL",
            "url":"http://lakecity.craigslist.org"
         },
         {
            "name":"ocala",
            "url":"http://ocala.craigslist.org"
         },
         {
            "name":"okaloosa / walton",
            "url":"http://okaloosa.craigslist.org"
         },
         {
            "name":"orlando",
            "url":"http://orlando.craigslist.org"
         },
         {
            "name":"panama city",
            "url":"http://panamacity.craigslist.org"
         },
         {
            "name":"pensacola",
            "url":"http://pensacola.craigslist.org"
         },
         {
            "name":"sarasota-bradenton",
            "url":"http://sarasota.craigslist.org"
         },
         {
            "name":"south florida",
            "url":"http://miami.craigslist.org"
         },
         {
            "name":"space coast",
            "url":"http://spacecoast.craigslist.org"
         },
         {
            "name":"st augustine",
            "url":"http://staugustine.craigslist.org"
         },
         {
            "name":"tallahassee",
            "url":"http://tallahassee.craigslist.org"
         },
         {
            "name":"tampa bay area",
            "url":"http://tampa.craigslist.org"
         },
         {
            "name":"treasure coast",
            "url":"http://treasure.craigslist.org"
         },
         {
            "name":"west palm beach",
            "url":"http://westpalmbeach.craigslist.org"
         }
      ]
   },
   {
      "name":"Georgia",
      "records":[
         {
            "name":"albany ",
            "url":"http://albanyga.craigslist.org"
         },
         {
            "name":"athens",
            "url":"http://athensga.craigslist.org"
         },
         {
            "name":"atlanta",
            "url":"http://atlanta.craigslist.org"
         },
         {
            "name":"augusta",
            "url":"http://augusta.craigslist.org"
         },
         {
            "name":"brunswick",
            "url":"http://brunswick.craigslist.org"
         },
         {
            "name":"columbus ",
            "url":"http://columbusga.craigslist.org"
         },
         {
            "name":"macon / warner robins",
            "url":"http://macon.craigslist.org"
         },
         {
            "name":"northwest GA",
            "url":"http://nwga.craigslist.org"
         },
         {
            "name":"savannah / hinesville",
            "url":"http://savannah.craigslist.org"
         },
         {
            "name":"statesboro",
            "url":"http://statesboro.craigslist.org"
         },
         {
            "name":"valdosta",
            "url":"http://valdosta.craigslist.org"
         }
      ]
   },
   {
      "name":"Hawaii",
      "records":[
         {
            "name":"hawaii",
            "url":"http://honolulu.craigslist.org"
         }
      ]
   },
   {
      "name":"Idaho",
      "records":[
         {
            "name":"boise",
            "url":"http://boise.craigslist.org"
         },
         {
            "name":"east idaho",
            "url":"http://eastidaho.craigslist.org"
         },
         {
            "name":"lewiston / clarkston",
            "url":"http://lewiston.craigslist.org"
         },
         {
            "name":"twin falls",
            "url":"http://twinfalls.craigslist.org"
         }
      ]
   },
   {
      "name":"Illinois",
      "records":[
         {
            "name":"bloomington-normal",
            "url":"http://bn.craigslist.org"
         },
         {
            "name":"champaign urbana",
            "url":"http://chambana.craigslist.org"
         },
         {
            "name":"chicago",
            "url":"http://chicago.craigslist.org"
         },
         {
            "name":"decatur",
            "url":"http://decatur.craigslist.org"
         },
         {
            "name":"la salle co",
            "url":"http://lasalle.craigslist.org"
         },
         {
            "name":"mattoon-charleston",
            "url":"http://mattoon.craigslist.org"
         },
         {
            "name":"peoria",
            "url":"http://peoria.craigslist.org"
         },
         {
            "name":"rockford",
            "url":"http://rockford.craigslist.org"
         },
         {
            "name":"southern illinois",
            "url":"http://carbondale.craigslist.org"
         },
         {
            "name":"springfield ",
            "url":"http://springfieldil.craigslist.org"
         },
         {
            "name":"western IL",
            "url":"http://quincy.craigslist.org"
         }
      ]
   },
   {
      "name":"Indiana",
      "records":[
         {
            "name":"bloomington",
            "url":"http://bloomington.craigslist.org"
         },
         {
            "name":"evansville",
            "url":"http://evansville.craigslist.org"
         },
         {
            "name":"fort wayne",
            "url":"http://fortwayne.craigslist.org"
         },
         {
            "name":"indianapolis",
            "url":"http://indianapolis.craigslist.org"
         },
         {
            "name":"kokomo",
            "url":"http://kokomo.craigslist.org"
         },
         {
            "name":"lafayette / west lafayette",
            "url":"http://tippecanoe.craigslist.org"
         },
         {
            "name":"muncie / anderson",
            "url":"http://muncie.craigslist.org"
         },
         {
            "name":"richmond ",
            "url":"http://richmondin.craigslist.org"
         },
         {
            "name":"south bend / michiana",
            "url":"http://southbend.craigslist.org"
         },
         {
            "name":"terre haute",
            "url":"http://terrehaute.craigslist.org"
         }
      ]
   },
   {
      "name":"Iowa",
      "records":[
         {
            "name":"ames",
            "url":"http://ames.craigslist.org"
         },
         {
            "name":"cedar rapids",
            "url":"http://cedarrapids.craigslist.org"
         },
         {
            "name":"des moines",
            "url":"http://desmoines.craigslist.org"
         },
         {
            "name":"dubuque",
            "url":"http://dubuque.craigslist.org"
         },
         {
            "name":"fort dodge",
            "url":"http://fortdodge.craigslist.org"
         },
         {
            "name":"iowa city",
            "url":"http://iowacity.craigslist.org"
         },
         {
            "name":"mason city",
            "url":"http://masoncity.craigslist.org"
         },
         {
            "name":"quad cities",
            "url":"http://quadcities.craigslist.org"
         },
         {
            "name":"sioux city",
            "url":"http://siouxcity.craigslist.org"
         },
         {
            "name":"southeast IA",
            "url":"http://ottumwa.craigslist.org"
         },
         {
            "name":"waterloo / cedar falls",
            "url":"http://waterloo.craigslist.org"
         }
      ]
   },
   {
      "name":"Kansas",
      "records":[
         {
            "name":"lawrence",
            "url":"http://lawrence.craigslist.org"
         },
         {
            "name":"manhattan",
            "url":"http://ksu.craigslist.org"
         },
         {
            "name":"northwest KS",
            "url":"http://nwks.craigslist.org"
         },
         {
            "name":"salina",
            "url":"http://salina.craigslist.org"
         },
         {
            "name":"southeast KS",
            "url":"http://seks.craigslist.org"
         },
         {
            "name":"southwest KS",
            "url":"http://swks.craigslist.org"
         },
         {
            "name":"topeka",
            "url":"http://topeka.craigslist.org"
         },
         {
            "name":"wichita",
            "url":"http://wichita.craigslist.org"
         }
      ]
   },
   {
      "name":"Kentucky",
      "records":[
         {
            "name":"bowling green",
            "url":"http://bgky.craigslist.org"
         },
         {
            "name":"eastern kentucky",
            "url":"http://eastky.craigslist.org"
         },
         {
            "name":"lexington",
            "url":"http://lexington.craigslist.org"
         },
         {
            "name":"louisville",
            "url":"http://louisville.craigslist.org"
         },
         {
            "name":"owensboro",
            "url":"http://owensboro.craigslist.org"
         },
         {
            "name":"western KY",
            "url":"http://westky.craigslist.org"
         }
      ]
   },
   {
      "name":"Louisiana",
      "records":[
         {
            "name":"baton rouge",
            "url":"http://batonrouge.craigslist.org"
         },
         {
            "name":"central louisiana",
            "url":"http://cenla.craigslist.org"
         },
         {
            "name":"houma",
            "url":"http://houma.craigslist.org"
         },
         {
            "name":"lafayette",
            "url":"http://lafayette.craigslist.org"
         },
         {
            "name":"lake charles",
            "url":"http://lakecharles.craigslist.org"
         },
         {
            "name":"monroe",
            "url":"http://monroe.craigslist.org"
         },
         {
            "name":"new orleans",
            "url":"http://neworleans.craigslist.org"
         },
         {
            "name":"shreveport",
            "url":"http://shreveport.craigslist.org"
         }
      ]
   },
   {
      "name":"Maine",
      "records":[
         {
            "name":"maine",
            "url":"http://maine.craigslist.org"
         }
      ]
   },
   {
      "name":"Maryland",
      "records":[
         {
            "name":"annapolis",
            "url":"http://annapolis.craigslist.org"
         },
         {
            "name":"baltimore",
            "url":"http://baltimore.craigslist.org"
         },
         {
            "name":"eastern shore",
            "url":"http://easternshore.craigslist.org"
         },
         {
            "name":"frederick",
            "url":"http://frederick.craigslist.org"
         },
         {
            "name":"southern maryland",
            "url":"http://smd.craigslist.org"
         },
         {
            "name":"western maryland",
            "url":"http://westmd.craigslist.org"
         }
      ]
   },
   {
      "name":"Massachusetts",
      "records":[
         {
            "name":"boston",
            "url":"http://boston.craigslist.org"
         },
         {
            "name":"cape cod / islands",
            "url":"http://capecod.craigslist.org"
         },
         {
            "name":"south coast",
            "url":"http://southcoast.craigslist.org"
         },
         {
            "name":"western massachusetts",
            "url":"http://westernmass.craigslist.org"
         },
         {
            "name":"worcester / central MA",
            "url":"http://worcester.craigslist.org"
         }
      ]
   },
   {
      "name":"Michigan",
      "records":[
         {
            "name":"ann arbor",
            "url":"http://annarbor.craigslist.org"
         },
         {
            "name":"battle creek",
            "url":"http://battlecreek.craigslist.org"
         },
         {
            "name":"central michigan",
            "url":"http://centralmich.craigslist.org"
         },
         {
            "name":"detroit metro",
            "url":"http://detroit.craigslist.org"
         },
         {
            "name":"flint",
            "url":"http://flint.craigslist.org"
         },
         {
            "name":"grand rapids",
            "url":"http://grandrapids.craigslist.org"
         },
         {
            "name":"holland",
            "url":"http://holland.craigslist.org"
         },
         {
            "name":"jackson ",
            "url":"http://jxn.craigslist.org"
         },
         {
            "name":"kalamazoo",
            "url":"http://kalamazoo.craigslist.org"
         },
         {
            "name":"lansing",
            "url":"http://lansing.craigslist.org"
         },
         {
            "name":"monroe ",
            "url":"http://monroemi.craigslist.org"
         },
         {
            "name":"muskegon",
            "url":"http://muskegon.craigslist.org"
         },
         {
            "name":"northern michigan",
            "url":"http://nmi.craigslist.org"
         },
         {
            "name":"port huron",
            "url":"http://porthuron.craigslist.org"
         },
         {
            "name":"saginaw-midland-baycity",
            "url":"http://saginaw.craigslist.org"
         },
         {
            "name":"southwest michigan",
            "url":"http://swmi.craigslist.org"
         },
         {
            "name":"the thumb",
            "url":"http://thumb.craigslist.org"
         },
         {
            "name":"upper peninsula",
            "url":"http://up.craigslist.org"
         }
      ]
   },
   {
      "name":"Minnesota",
      "records":[
         {
            "name":"bemidji",
            "url":"http://bemidji.craigslist.org"
         },
         {
            "name":"brainerd",
            "url":"http://brainerd.craigslist.org"
         },
         {
            "name":"duluth / superior",
            "url":"http://duluth.craigslist.org"
         },
         {
            "name":"mankato",
            "url":"http://mankato.craigslist.org"
         },
         {
            "name":"minneapolis / st paul",
            "url":"http://minneapolis.craigslist.org"
         },
         {
            "name":"rochester ",
            "url":"http://rmn.craigslist.org"
         },
         {
            "name":"southwest MN",
            "url":"http://marshall.craigslist.org"
         },
         {
            "name":"st cloud",
            "url":"http://stcloud.craigslist.org"
         }
      ]
   },
   {
      "name":"Mississippi",
      "records":[
         {
            "name":"gulfport / biloxi",
            "url":"http://gulfport.craigslist.org"
         },
         {
            "name":"hattiesburg",
            "url":"http://hattiesburg.craigslist.org"
         },
         {
            "name":"jackson",
            "url":"http://jackson.craigslist.org"
         },
         {
            "name":"meridian",
            "url":"http://meridian.craigslist.org"
         },
         {
            "name":"north mississippi",
            "url":"http://northmiss.craigslist.org"
         },
         {
            "name":"southwest MS",
            "url":"http://natchez.craigslist.org"
         }
      ]
   },
   {
      "name":"Missouri",
      "records":[
         {
            "name":"columbia / jeff city",
            "url":"http://columbiamo.craigslist.org"
         },
         {
            "name":"joplin",
            "url":"http://joplin.craigslist.org"
         },
         {
            "name":"kansas city",
            "url":"http://kansascity.craigslist.org"
         },
         {
            "name":"kirksville",
            "url":"http://kirksville.craigslist.org"
         },
         {
            "name":"lake of the ozarks",
            "url":"http://loz.craigslist.org"
         },
         {
            "name":"southeast missouri",
            "url":"http://semo.craigslist.org"
         },
         {
            "name":"springfield",
            "url":"http://springfield.craigslist.org"
         },
         {
            "name":"st joseph",
            "url":"http://stjoseph.craigslist.org"
         },
         {
            "name":"st louis",
            "url":"http://stlouis.craigslist.org"
         }
      ]
   },
   {
      "name":"Montana",
      "records":[
         {
            "name":"billings",
            "url":"http://billings.craigslist.org"
         },
         {
            "name":"bozeman",
            "url":"http://bozeman.craigslist.org"
         },
         {
            "name":"butte",
            "url":"http://butte.craigslist.org"
         },
         {
            "name":"great falls",
            "url":"http://greatfalls.craigslist.org"
         },
         {
            "name":"helena",
            "url":"http://helena.craigslist.org"
         },
         {
            "name":"kalispell",
            "url":"http://kalispell.craigslist.org"
         },
         {
            "name":"missoula",
            "url":"http://missoula.craigslist.org"
         },
         {
            "name":"montana (old)",
            "url":"http://montana.craigslist.org"
         }
      ]
   },
   {
      "name":"Nebraska",
      "records":[
         {
            "name":"grand island",
            "url":"http://grandisland.craigslist.org"
         },
         {
            "name":"lincoln",
            "url":"http://lincoln.craigslist.org"
         },
         {
            "name":"north platte",
            "url":"http://northplatte.craigslist.org"
         },
         {
            "name":"omaha / council bluffs",
            "url":"http://omaha.craigslist.org"
         },
         {
            "name":"scottsbluff / panhandle",
            "url":"http://scottsbluff.craigslist.org"
         }
      ]
   },
   {
      "name":"Nevada",
      "records":[
         {
            "name":"elko",
            "url":"http://elko.craigslist.org"
         },
         {
            "name":"las vegas",
            "url":"http://lasvegas.craigslist.org"
         },
         {
            "name":"reno / tahoe",
            "url":"http://reno.craigslist.org"
         }
      ]
   },
   {
      "name":"New Hampshire",
      "records":[
         {
            "name":"new hampshire",
            "url":"http://nh.craigslist.org"
         }
      ]
   },
   {
      "name":"New Jersey",
      "records":[
         {
            "name":"central NJ",
            "url":"http://cnj.craigslist.org"
         },
         {
            "name":"jersey shore",
            "url":"http://jerseyshore.craigslist.org"
         },
         {
            "name":"north jersey",
            "url":"http://newjersey.craigslist.org"
         },
         {
            "name":"south jersey",
            "url":"http://southjersey.craigslist.org"
         }
      ]
   },
   {
      "name":"New Mexico",
      "records":[
         {
            "name":"albuquerque",
            "url":"http://albuquerque.craigslist.org"
         },
         {
            "name":"clovis / portales",
            "url":"http://clovis.craigslist.org"
         },
         {
            "name":"farmington",
            "url":"http://farmington.craigslist.org"
         },
         {
            "name":"las cruces",
            "url":"http://lascruces.craigslist.org"
         },
         {
            "name":"roswell / carlsbad",
            "url":"http://roswell.craigslist.org"
         },
         {
            "name":"santa fe / taos",
            "url":"http://santafe.craigslist.org"
         }
      ]
   },
   {
      "name":"New York",
      "records":[
         {
            "name":"albany",
            "url":"http://albany.craigslist.org"
         },
         {
            "name":"binghamton",
            "url":"http://binghamton.craigslist.org"
         },
         {
            "name":"buffalo",
            "url":"http://buffalo.craigslist.org"
         },
         {
            "name":"catskills",
            "url":"http://catskills.craigslist.org"
         },
         {
            "name":"chautauqua",
            "url":"http://chautauqua.craigslist.org"
         },
         {
            "name":"elmira-corning",
            "url":"http://elmira.craigslist.org"
         },
         {
            "name":"finger lakes",
            "url":"http://fingerlakes.craigslist.org"
         },
         {
            "name":"glens falls",
            "url":"http://glensfalls.craigslist.org"
         },
         {
            "name":"hudson valley",
            "url":"http://hudsonvalley.craigslist.org"
         },
         {
            "name":"ithaca",
            "url":"http://ithaca.craigslist.org"
         },
         {
            "name":"long island",
            "url":"http://longisland.craigslist.org"
         },
         {
            "name":"new york city",
            "url":"http://newyork.craigslist.org"
         },
         {
            "name":"oneonta",
            "url":"http://oneonta.craigslist.org"
         },
         {
            "name":"plattsburgh-adirondacks",
            "url":"http://plattsburgh.craigslist.org"
         },
         {
            "name":"potsdam-canton-massena",
            "url":"http://potsdam.craigslist.org"
         },
         {
            "name":"rochester",
            "url":"http://rochester.craigslist.org"
         },
         {
            "name":"syracuse",
            "url":"http://syracuse.craigslist.org"
         },
         {
            "name":"twin tiers NY/PA",
            "url":"http://twintiers.craigslist.org"
         },
         {
            "name":"utica-rome-oneida",
            "url":"http://utica.craigslist.org"
         },
         {
            "name":"watertown",
            "url":"http://watertown.craigslist.org"
         }
      ]
   },
   {
      "name":"North Carolina",
      "records":[
         {
            "name":"asheville",
            "url":"http://asheville.craigslist.org"
         },
         {
            "name":"boone",
            "url":"http://boone.craigslist.org"
         },
         {
            "name":"charlotte",
            "url":"http://charlotte.craigslist.org"
         },
         {
            "name":"eastern NC",
            "url":"http://eastnc.craigslist.org"
         },
         {
            "name":"fayetteville",
            "url":"http://fayetteville.craigslist.org"
         },
         {
            "name":"greensboro",
            "url":"http://greensboro.craigslist.org"
         },
         {
            "name":"hickory / lenoir",
            "url":"http://hickory.craigslist.org"
         },
         {
            "name":"jacksonville ",
            "url":"http://onslow.craigslist.org"
         },
         {
            "name":"outer banks",
            "url":"http://outerbanks.craigslist.org"
         },
         {
            "name":"raleigh / durham / CH",
            "url":"http://raleigh.craigslist.org"
         },
         {
            "name":"wilmington",
            "url":"http://wilmington.craigslist.org"
         },
         {
            "name":"winston-salem",
            "url":"http://winstonsalem.craigslist.org"
         }
      ]
   },
   {
      "name":"North Dakota",
      "records":[
         {
            "name":"bismarck",
            "url":"http://bismarck.craigslist.org"
         },
         {
            "name":"fargo / moorhead",
            "url":"http://fargo.craigslist.org"
         },
         {
            "name":"grand forks",
            "url":"http://grandforks.craigslist.org"
         },
         {
            "name":"north dakota",
            "url":"http://nd.craigslist.org"
         }
      ]
   },
   {
      "name":"Ohio",
      "records":[
         {
            "name":"akron / canton",
            "url":"http://akroncanton.craigslist.org"
         },
         {
            "name":"ashtabula",
            "url":"http://ashtabula.craigslist.org"
         },
         {
            "name":"athens ",
            "url":"http://athensohio.craigslist.org"
         },
         {
            "name":"chillicothe",
            "url":"http://chillicothe.craigslist.org"
         },
         {
            "name":"cincinnati",
            "url":"http://cincinnati.craigslist.org"
         },
         {
            "name":"cleveland",
            "url":"http://cleveland.craigslist.org"
         },
         {
            "name":"columbus",
            "url":"http://columbus.craigslist.org"
         },
         {
            "name":"dayton / springfield",
            "url":"http://dayton.craigslist.org"
         },
         {
            "name":"lima / findlay",
            "url":"http://limaohio.craigslist.org"
         },
         {
            "name":"mansfield",
            "url":"http://mansfield.craigslist.org"
         },
         {
            "name":"sandusky",
            "url":"http://sandusky.craigslist.org"
         },
         {
            "name":"toledo",
            "url":"http://toledo.craigslist.org"
         },
         {
            "name":"tuscarawas co",
            "url":"http://tuscarawas.craigslist.org"
         },
         {
            "name":"youngstown",
            "url":"http://youngstown.craigslist.org"
         },
         {
            "name":"zanesville / cambridge",
            "url":"http://zanesville.craigslist.org"
         }
      ]
   },
   {
      "name":"Oklahoma",
      "records":[
         {
            "name":"lawton",
            "url":"http://lawton.craigslist.org"
         },
         {
            "name":"northwest OK",
            "url":"http://enid.craigslist.org"
         },
         {
            "name":"oklahoma city",
            "url":"http://oklahomacity.craigslist.org"
         },
         {
            "name":"stillwater",
            "url":"http://stillwater.craigslist.org"
         },
         {
            "name":"tulsa",
            "url":"http://tulsa.craigslist.org"
         }
      ]
   },
   {
      "name":"Oregon",
      "records":[
         {
            "name":"bend",
            "url":"http://bend.craigslist.org"
         },
         {
            "name":"corvallis/albany",
            "url":"http://corvallis.craigslist.org"
         },
         {
            "name":"east oregon",
            "url":"http://eastoregon.craigslist.org"
         },
         {
            "name":"eugene",
            "url":"http://eugene.craigslist.org"
         },
         {
            "name":"klamath falls",
            "url":"http://klamath.craigslist.org"
         },
         {
            "name":"medford-ashland",
            "url":"http://medford.craigslist.org"
         },
         {
            "name":"oregon coast",
            "url":"http://oregoncoast.craigslist.org"
         },
         {
            "name":"portland",
            "url":"http://portland.craigslist.org"
         },
         {
            "name":"roseburg",
            "url":"http://roseburg.craigslist.org"
         },
         {
            "name":"salem",
            "url":"http://salem.craigslist.org"
         }
      ]
   },
   {
      "name":"Pennsylvania",
      "records":[
         {
            "name":"altoona-johnstown",
            "url":"http://altoona.craigslist.org"
         },
         {
            "name":"cumberland valley",
            "url":"http://chambersburg.craigslist.org"
         },
         {
            "name":"erie",
            "url":"http://erie.craigslist.org"
         },
         {
            "name":"harrisburg",
            "url":"http://harrisburg.craigslist.org"
         },
         {
            "name":"lancaster",
            "url":"http://lancaster.craigslist.org"
         },
         {
            "name":"lehigh valley",
            "url":"http://allentown.craigslist.org"
         },
         {
            "name":"meadville",
            "url":"http://meadville.craigslist.org"
         },
         {
            "name":"philadelphia",
            "url":"http://philadelphia.craigslist.org"
         },
         {
            "name":"pittsburgh",
            "url":"http://pittsburgh.craigslist.org"
         },
         {
            "name":"poconos",
            "url":"http://poconos.craigslist.org"
         },
         {
            "name":"reading",
            "url":"http://reading.craigslist.org"
         },
         {
            "name":"scranton / wilkes-barre",
            "url":"http://scranton.craigslist.org"
         },
         {
            "name":"state college",
            "url":"http://pennstate.craigslist.org"
         },
         {
            "name":"williamsport",
            "url":"http://williamsport.craigslist.org"
         },
         {
            "name":"york",
            "url":"http://york.craigslist.org"
         }
      ]
   },
   {
      "name":"Rhode Island",
      "records":[
         {
            "name":"rhode island",
            "url":"http://providence.craigslist.org"
         }
      ]
   },
   {
      "name":"South Carolina",
      "records":[
         {
            "name":"charleston",
            "url":"http://charleston.craigslist.org"
         },
         {
            "name":"columbia",
            "url":"http://columbia.craigslist.org"
         },
         {
            "name":"florence",
            "url":"http://florencesc.craigslist.org"
         },
         {
            "name":"greenville / upstate",
            "url":"http://greenville.craigslist.org"
         },
         {
            "name":"hilton head",
            "url":"http://hiltonhead.craigslist.org"
         },
         {
            "name":"myrtle beach",
            "url":"http://myrtlebeach.craigslist.org"
         }
      ]
   },
   {
      "name":"South Dakota",
      "records":[
         {
            "name":"northeast SD",
            "url":"http://nesd.craigslist.org"
         },
         {
            "name":"pierre / central SD",
            "url":"http://csd.craigslist.org"
         },
         {
            "name":"rapid city / west SD",
            "url":"http://rapidcity.craigslist.org"
         },
         {
            "name":"sioux falls / SE SD",
            "url":"http://siouxfalls.craigslist.org"
         },
         {
            "name":"south dakota",
            "url":"http://sd.craigslist.org"
         }
      ]
   },
   {
      "name":"Tennessee",
      "records":[
         {
            "name":"chattanooga",
            "url":"http://chattanooga.craigslist.org"
         },
         {
            "name":"clarksville",
            "url":"http://clarksville.craigslist.org"
         },
         {
            "name":"cookeville",
            "url":"http://cookeville.craigslist.org"
         },
         {
            "name":"jackson  ",
            "url":"http://jacksontn.craigslist.org"
         },
         {
            "name":"knoxville",
            "url":"http://knoxville.craigslist.org"
         },
         {
            "name":"memphis",
            "url":"http://memphis.craigslist.org"
         },
         {
            "name":"nashville",
            "url":"http://nashville.craigslist.org"
         },
         {
            "name":"tri-cities",
            "url":"http://tricities.craigslist.org"
         }
      ]
   },
   {
      "name":"Texas",
      "records":[
         {
            "name":"abilene",
            "url":"http://abilene.craigslist.org"
         },
         {
            "name":"amarillo",
            "url":"http://amarillo.craigslist.org"
         },
         {
            "name":"austin",
            "url":"http://austin.craigslist.org"
         },
         {
            "name":"beaumont / port arthur",
            "url":"http://beaumont.craigslist.org"
         },
         {
            "name":"brownsville",
            "url":"http://brownsville.craigslist.org"
         },
         {
            "name":"college station",
            "url":"http://collegestation.craigslist.org"
         },
         {
            "name":"corpus christi",
            "url":"http://corpuschristi.craigslist.org"
         },
         {
            "name":"dallas / fort worth",
            "url":"http://dallas.craigslist.org"
         },
         {
            "name":"deep east texas",
            "url":"http://nacogdoches.craigslist.org"
         },
         {
            "name":"del rio / eagle pass",
            "url":"http://delrio.craigslist.org"
         },
         {
            "name":"el paso",
            "url":"http://elpaso.craigslist.org"
         },
         {
            "name":"galveston",
            "url":"http://galveston.craigslist.org"
         },
         {
            "name":"houston",
            "url":"http://houston.craigslist.org"
         },
         {
            "name":"killeen / temple / ft hood",
            "url":"http://killeen.craigslist.org"
         },
         {
            "name":"laredo",
            "url":"http://laredo.craigslist.org"
         },
         {
            "name":"lubbock",
            "url":"http://lubbock.craigslist.org"
         },
         {
            "name":"mcallen / edinburg",
            "url":"http://mcallen.craigslist.org"
         },
         {
            "name":"odessa / midland",
            "url":"http://odessa.craigslist.org"
         },
         {
            "name":"san angelo",
            "url":"http://sanangelo.craigslist.org"
         },
         {
            "name":"san antonio",
            "url":"http://sanantonio.craigslist.org"
         },
         {
            "name":"san marcos",
            "url":"http://sanmarcos.craigslist.org"
         },
         {
            "name":"southwest TX",
            "url":"http://bigbend.craigslist.org"
         },
         {
            "name":"texoma",
            "url":"http://texoma.craigslist.org"
         },
         {
            "name":"tyler / east TX",
            "url":"http://easttexas.craigslist.org"
         },
         {
            "name":"victoria ",
            "url":"http://victoriatx.craigslist.org"
         },
         {
            "name":"waco",
            "url":"http://waco.craigslist.org"
         },
         {
            "name":"wichita falls",
            "url":"http://wichitafalls.craigslist.org"
         }
      ]
   },
   {
      "name":"Utah",
      "records":[
         {
            "name":"logan",
            "url":"http://logan.craigslist.org"
         },
         {
            "name":"ogden-clearfield",
            "url":"http://ogden.craigslist.org"
         },
         {
            "name":"provo / orem",
            "url":"http://provo.craigslist.org"
         },
         {
            "name":"salt lake city",
            "url":"http://saltlakecity.craigslist.org"
         },
         {
            "name":"st george",
            "url":"http://stgeorge.craigslist.org"
         }
      ]
   },
   {
      "name":"Vermont",
      "records":[
         {
            "name":"vermont",
            "url":"http://burlington.craigslist.org"
         }
      ]
   },
   {
      "name":"Virginia",
      "records":[
         {
            "name":"charlottesville",
            "url":"http://charlottesville.craigslist.org"
         },
         {
            "name":"danville",
            "url":"http://danville.craigslist.org"
         },
         {
            "name":"fredericksburg",
            "url":"http://fredericksburg.craigslist.org"
         },
         {
            "name":"hampton roads",
            "url":"http://norfolk.craigslist.org"
         },
         {
            "name":"harrisonburg",
            "url":"http://harrisonburg.craigslist.org"
         },
         {
            "name":"lynchburg",
            "url":"http://lynchburg.craigslist.org"
         },
         {
            "name":"new river valley",
            "url":"http://blacksburg.craigslist.org"
         },
         {
            "name":"richmond",
            "url":"http://richmond.craigslist.org"
         },
         {
            "name":"roanoke",
            "url":"http://roanoke.craigslist.org"
         },
         {
            "name":"southwest VA",
            "url":"http://swva.craigslist.org"
         },
         {
            "name":"winchester",
            "url":"http://winchester.craigslist.org"
         }
      ]
   },
   {
      "name":"Washington",
      "records":[
         {
            "name":"bellingham",
            "url":"http://bellingham.craigslist.org"
         },
         {
            "name":"kennewick-pasco-richland",
            "url":"http://kpr.craigslist.org"
         },
         {
            "name":"moses lake",
            "url":"http://moseslake.craigslist.org"
         },
         {
            "name":"olympic peninsula",
            "url":"http://olympic.craigslist.org"
         },
         {
            "name":"pullman / moscow",
            "url":"http://pullman.craigslist.org"
         },
         {
            "name":"seattle-tacoma",
            "url":"http://seattle.craigslist.org"
         },
         {
            "name":"skagit / island / SJI",
            "url":"http://skagit.craigslist.org"
         },
         {
            "name":"spokane / coeur d'alene",
            "url":"http://spokane.craigslist.org"
         },
         {
            "name":"wenatchee",
            "url":"http://wenatchee.craigslist.org"
         },
         {
            "name":"yakima",
            "url":"http://yakima.craigslist.org"
         }
      ]
   },
   {
      "name":"West Virginia",
      "records":[
         {
            "name":"charleston ",
            "url":"http://charlestonwv.craigslist.org"
         },
         {
            "name":"eastern panhandle",
            "url":"http://martinsburg.craigslist.org"
         },
         {
            "name":"huntington-ashland",
            "url":"http://huntington.craigslist.org"
         },
         {
            "name":"morgantown",
            "url":"http://morgantown.craigslist.org"
         },
         {
            "name":"northern panhandle",
            "url":"http://wheeling.craigslist.org"
         },
         {
            "name":"parkersburg-marietta",
            "url":"http://parkersburg.craigslist.org"
         },
         {
            "name":"southern WV",
            "url":"http://swv.craigslist.org"
         },
         {
            "name":"west virginia (old)",
            "url":"http://wv.craigslist.org"
         }
      ]
   },
   {
      "name":"Wisconsin",
      "records":[
         {
            "name":"appleton-oshkosh-FDL",
            "url":"http://appleton.craigslist.org"
         },
         {
            "name":"eau claire",
            "url":"http://eauclaire.craigslist.org"
         },
         {
            "name":"green bay",
            "url":"http://greenbay.craigslist.org"
         },
         {
            "name":"janesville",
            "url":"http://janesville.craigslist.org"
         },
         {
            "name":"kenosha-racine",
            "url":"http://racine.craigslist.org"
         },
         {
            "name":"la crosse",
            "url":"http://lacrosse.craigslist.org"
         },
         {
            "name":"madison",
            "url":"http://madison.craigslist.org"
         },
         {
            "name":"milwaukee",
            "url":"http://milwaukee.craigslist.org"
         },
         {
            "name":"northern WI",
            "url":"http://northernwi.craigslist.org"
         },
         {
            "name":"sheboygan",
            "url":"http://sheboygan.craigslist.org"
         },
         {
            "name":"wausau",
            "url":"http://wausau.craigslist.org"
         }
      ]
   },
   {
      "name":"Wyoming",
      "records":[
         {
            "name":"wyoming",
            "url":"http://wyoming.craigslist.org"
         }
      ]
   },
   {
      "name":"Territories",
      "records":[
         {
            "name":"guam-micronesia",
            "url":"http://micronesia.craigslist.org"
         },
         {
            "name":"puerto rico",
            "url":"http://puertorico.craigslist.org"
         },
         {
            "name":"U.S. virgin islands",
            "url":"http://virgin.craigslist.org"
         }
      ]
   }
];

var sites = '';
var regions = '';
for(var i in locations)
{
   var name = locations[i].name.toLowerCase();
   var abbr = findStateName(name);
   name = name.replace(' ','_');

   regions+=
"      <region>\n" +
"         <name><![CDATA["+locations[i].name+"]]></name>\n" +
"         <type>"+name+"</type>\n" +
"      </region>\n";

   for(var j in locations[i].records)
   {
      var record = locations[i].records[j];
      var url = record.url.replace("http://",'');
      sites += 
"      <location>\n" +
"         <state>"+abbr+"</state>\n" +
"         <type>"+name+"</type>\n" +
"         <url><![CDATA["+url+"/search/sss?]]></url>\n" +
"         <partial><![CDATA["+url+"]]></partial>\n" +
"         <name><![CDATA["+record.name+"]]></name>\n" +
"      </location>\n";
   }
}

console.log(regions);
console.log(sites);