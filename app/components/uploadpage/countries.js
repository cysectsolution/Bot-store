import React, { Component } from 'react';


import { Select,Option } 
from "muicss/react";


export default class Countries extends Component {
  constructor() {
		super()
		this.state = {
		
			country: ''
			

		}
	}

  onChange(e){
		
		this.setState({
			[e.target.name]: e.target.value
		})
		
		
	}
  render() {

    return (
   
      <div>
        <Option value="Afghanistan" label="Afghanistan">Afghanistan</Option>
        <Option value="Åland Islands" label="Åland Islands">Åland Islands</Option>
        <Option value="Albania" label="Albania">Albania</Option>
        <Option value="Algeria" label="Algeria">Algeria</Option>
        <Option value="American Samoa" label="American Samoa">American Samoa</Option>
        <Option value="Andorra" label="Andorra">Andorra</Option>
        <Option value="Angola" label="Angola">Angola</Option>
        <Option value="Anguilla" label="Anguilla">Anguilla</Option>
        <Option value="Antarctica" label="Antarctica">Antarctica</Option>
        <Option value="Antigua and Barbuda" label="Antigua and Barbuda">Antigua and Barbuda</Option>
        <Option value="Argentina" label="Argentina">Argentina</Option>
        <Option value="Armenia" label="Armenia">Armenia</Option>
        <Option value="Aruba" label="Aruba">Aruba</Option>
        <Option value="Australia" label="Australia">Australia</Option>
        <Option value="Austria" label="Austria">Austria</Option>
        <Option value="Azerbaijan" label="Azerbaijan">Azerbaijan</Option>
        <Option value="Bahamas" label="Bahamas">Bahamas</Option>
        <Option value="Bahrain" label="Bahrain">Bahrain</Option>
        <Option value="Bangladesh" label="Bangladesh">Bangladesh</Option>
        <Option value="Barbados" label="Barbados">Barbados</Option>
        <Option value="Belarus" label="Belarus">Belarus</Option>
        <Option value="Belgium" label="Belgium">Belgium</Option>
        <Option value="Belize" label="Belize">Belize</Option>
        <Option value="Benin" label="Benin">Benin</Option>
        <Option value="Bermuda" label="Bermuda">Bermuda</Option>
        <Option value="Bhutan" label="Bhutan">Bhutan</Option>
        <Option value="Bolivia, Plurinational State of" label="Bolivia, Plurinational State of">Bolivia, Plurinational State of</Option>
        <Option value="Bonaire, Sint Eustatius and Saba" label="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</Option>
        <Option value="Bosnia and Herzegovina" label="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
        <Option value="Botswana" label="Botswana">Botswana</Option>
        <Option value="Bouvet Island" label="Bouvet Island">Bouvet Island</Option>
        <Option value="Brazil" label="Brazil">Brazil</Option>
        <Option value="British Indian Ocean Territory" label="British Indian Ocean Territory">British Indian Ocean Territory</Option>
        <Option value="Brunei Darussalam" label="Brunei Darussalam">Brunei Darussalam</Option>
        <Option value="Bulgaria" label="Bulgaria">Bulgaria</Option>
        <Option value="Burkina Faso" label="Burkina Faso">Burkina Faso</Option>
        <Option value="Burundi" label="Burundi">Burundi</Option>
        <Option value="Cambodia" label="Cambodia">Cambodia</Option>
        <Option value="Cameroon" label="Cameroon">Cameroon</Option>
        <Option value="Canada" label="Canada">Canada</Option>
        <Option value="Cape Verde" label="Cape Verde">Cape Verde</Option>
        <Option value="Cayman Islands" label="Cayman Islands">Cayman Islands</Option>
        <Option value="Central African Republic" label="Central African Republic">Central African Republic</Option>
        <Option value="Chad" label="Chad">Chad</Option>
        <Option value="Chile" label="Chile">Chile</Option>
        <Option value="China" label="China">China</Option>
        <Option value="Christmas Island" label="Christmas Island">Christmas Island</Option>
        <Option value="Cocos (Keeling) Islands" label="Cocos (Keeling) Islands">Cocos (Keeling) Islands</Option>
        <Option value="Colombia" label="Colombia">Colombia</Option>
        <Option value="Comoros" label="Comoros">Comoros</Option>
        <Option value="Congo" label="Congo">Congo</Option>
        <Option value="Congo, the Democratic Republic of the" label="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</Option>
        <Option value="Cook Islands" label="Cook Islands">Cook Islands</Option>
        <Option value="Costa Rica" label="Costa Rica">Costa Rica</Option>
        <Option value="Côte d'Ivoire" label="Côte d'Ivoire">Côte d'Ivoire</Option>
        <Option value="Croatia" label="Croatia">Croatia</Option>
        <Option value="Cuba" label="Cuba">Cuba</Option>
        <Option value="Curaçao" label="Curaçao">Curaçao</Option>
        <Option value="Cyprus" label="Cyprus">Cyprus</Option>
        <Option value="Czech Republic" label="Czech Republic">Czech Republic</Option>
        <Option value="Denmark" label="Denmark">Denmark</Option>
        <Option value="Djibouti" label="Djibouti">Djibouti</Option>
        <Option value="Dominica" label="Dominica">Dominica</Option>
        <Option value="Dominican Republic" label="Dominican Republic">Dominican Republic</Option>
        <Option value="Ecuador" label="Ecuador">Ecuador</Option>
        <Option value="Egypt" label="Egypt">Egypt</Option>
        <Option value="El Salvador" label="El Salvador">El Salvador</Option>
        <Option value="Equatorial Guinea" label="Equatorial Guinea">Equatorial Guinea</Option>
        <Option value="Eritrea" label="Eritrea">Eritrea</Option>
        <Option value="Estonia" label="Estonia">Estonia</Option>
        <Option value="Ethiopia" label="Ethiopia">Ethiopia</Option>
        <Option value="Falkland Islands (Malvinas)" label="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</Option>
        <Option value="Faroe Islands" label="Faroe Islands">Faroe Islands</Option>
        <Option value="Fiji" label="Fiji">Fiji</Option>
        <Option value="Finland" label="Finland">Finland</Option>
        <Option value="France" label="France">France</Option>
        <Option value="French Guiana" label="French Guiana">French Guiana</Option>
        <Option value="French Polynesia" label="French Polynesia">French Polynesia</Option>
        <Option value="French Southern Territories" label="French Southern Territories">French Southern Territories</Option>
        <Option value="Gabon" label="Gabon">Gabon</Option>
        <Option value="Gambia" label="Gambia">Gambia</Option>
        <Option value="Georgia" label="Georgia">Georgia</Option>
        <Option value="Germany" label="Germany">Germany</Option>
        <Option value="Ghana" label="Ghana">Ghana</Option>
        <Option value="Gibraltar" label="Gibraltar">Gibraltar</Option>
        <Option value="Greece" label="Greece">Greece</Option>
        <Option value="Greenland" label="Greenland">Greenland</Option>
        <Option value="Grenada" label="Grenada">Grenada</Option>
        <Option value="Guadeloupe" label="Guadeloupe">Guadeloupe</Option>
        <Option value="Guam" label="Guam">Guam</Option>
        <Option value="Guatemala" label="Guatemala">Guatemala</Option>
        <Option value="Guernsey" label="Guernsey">Guernsey</Option>
        <Option value="Guinea" label="Guinea">Guinea</Option>
        <Option value="Guinea-Bissau" label="Guinea-Bissau">Guinea-Bissau</Option>
        <Option value="Guyana" label="Guyana">Guyana</Option>
        <Option value="Haiti" label="Haiti">Haiti</Option>
        <Option value="Heard Island and McDonald Islands" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</Option>
        <Option value="Holy See (Vatican City State)" label="Holy See (Vatican City State)">Holy See (Vatican City State)</Option>
        <Option value="Honduras" label="Honduras">Honduras</Option>
        <Option value="Hong Kong" label="Hong Kong">Hong Kong</Option>
        <Option value="Hungary" label="Hungary">Hungary</Option>
        <Option value="Iceland" label="Iceland">Iceland</Option>
        <Option value="India" label="India">India</Option>
        <Option value="Indonesia" label="Indonesia">Indonesia</Option>
        <Option value="Iran, Islamic Republic of" label="Iran, Islamic Republic of">Iran, Islamic Republic of</Option>
        <Option value="Iraq" label="Iraq">Iraq</Option>
        <Option value="Ireland" label="Ireland">Ireland</Option>
        <Option value="Isle of Man" label="Isle of Man">Isle of Man</Option>
        <Option value="Israel" label="Israel">Israel</Option>
        <Option value="Italy" label="Italy">Italy</Option>
        <Option value="Jamaica" label="Jamaica">Jamaica</Option>
        <Option value="Japan" label="Japan">Japan</Option>
        <Option value="Jersey" label="Jersey">Jersey</Option>
        <Option value="Jordan" label="Jordan">Jordan</Option>
        <Option value="Kazakhstan" label="Kazakhstan">Kazakhstan</Option>
        <Option value="Kenya" label="Kenya">Kenya</Option>
        <Option value="Kiribati" label="Kiribati">Kiribati</Option>
        <Option value="Korea, Democratic People's Republic of" label="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</Option>
        <Option value="Korea, Republic of" label="Korea, Republic of">Korea, Republic of</Option>
        <Option value="Kuwait" label="Kuwait">Kuwait</Option>
        <Option value="Kyrgyzstan" label="Kyrgyzstan">Kyrgyzstan</Option>
        <Option value="Lao People's Democratic Republic" label="Lao People's Democratic Republic">Lao People's Democratic Republic</Option>
        <Option value="Latvia" label="Latvia">Latvia</Option>
        <Option value="Lebanon" label="Lebanon">Lebanon</Option>
        <Option value="Lesotho" label="Lesotho">Lesotho</Option>
        <Option value="Liberia" label="Liberia">Liberia</Option>
        <Option value="Libya" label="Libya">Libya</Option>
        <Option value="Liechtenstein" label="Liechtenstein">Liechtenstein</Option>
        <Option value="Lithuania" label="Lithuania">Lithuania</Option>
        <Option value="Luxembourg" label="Luxembourg">Luxembourg</Option>
        <Option value="Macao" label="Macao">Macao</Option>
        <Option value="Macedonia, the former Yugoslav Republic of" label="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</Option>
        <Option value="Madagascar" label="Madagascar">Madagascar</Option>
        <Option value="Malawi" label="Malawi">Malawi</Option>
        <Option value="Malaysia" label="Malaysia">Malaysia</Option>
        <Option value="Maldives" label="Maldives">Maldives</Option>
        <Option value="Mali" label="Mali">Mali</Option>
        <Option value="Malta" label="Malta">Malta</Option>
        <Option value="Marshall Islands" label="Marshall Islands">Marshall Islands</Option>
        <Option value="Martinique" label="Martinique">Martinique</Option>
        <Option value="Mauritania" label="Mauritania">Mauritania</Option>
        <Option value="Mauritius" label="Mauritius">Mauritius</Option>
        <Option value="Mayotte" label="Mayotte">Mayotte</Option>
        <Option value="Mexico" label="Mexico">Mexico</Option>
        <Option value="Micronesia, Federated States of" label="Micronesia, Federated States of">Micronesia, Federated States of</Option>
        <Option value="Moldova, Republic of" label="Moldova, Republic of">Moldova, Republic of</Option>
        <Option value="Monaco" label="Monaco">Monaco</Option>
        <Option value="Mongolia" label="Mongolia">Mongolia</Option>
        <Option value="Montenegro" label="Montenegro">Montenegro</Option>
        <Option value="Montserrat" label="Montserrat">Montserrat</Option>
        <Option value="Morocco" label="Morocco">Morocco</Option>
        <Option value="Mozambique" label="Mozambique">Mozambique</Option>
        <Option value="Myanmar" label="Myanmar">Myanmar</Option>
        <Option value="Namibia" label="Namibia">Namibia</Option>
        <Option value="Nauru" label="Nauru">Nauru</Option>
        <Option value="Nepal" label="Nepal">Nepal</Option>
        <Option value="Netherlands" label="Netherlands">Netherlands</Option>
        <Option value="New Caledonia" label="New Caledonia">New Caledonia</Option>
        <Option value="New Zealand" label="New Zealand">New Zealand</Option>
        <Option value="Nicaragua" label="Nicaragua">Nicaragua</Option>
        <Option value="Niger" label="Niger">Niger</Option>
        <Option value="Nigeria" label="Nigeria">Nigeria</Option>
        <Option value="Niue" label="Niue">Niue</Option>
        <Option value="Norfolk Island" label="Norfolk Island">Norfolk Island</Option>
        <Option value="Northern Mariana Islands" label="Northern Mariana Islands">Northern Mariana Islands</Option>
        <Option value="Norway" label="Norway">Norway</Option>
        <Option value="Oman" label="Oman">Oman</Option>
        <Option value="Pakistan" label="Pakistan">Pakistan</Option>
        <Option value="Palau" label="Palau">Palau</Option>
        <Option value="Palestinian Territory, Occupied" label="Palestinian Territory, Occupied">Palestinian Territory, Occupied</Option>
        <Option value="Panama" label="Panama">Panama</Option>
        <Option value="Papua New Guinea" label="Papua New Guinea">Papua New Guinea</Option>
        <Option value="Paraguay" label="Paraguay">Paraguay</Option>
        <Option value="Peru" label="Peru">Peru</Option>
        <Option value="Philippines" label="Philippines">Philippines</Option>
        <Option value="Pitcairn" label="Pitcairn">Pitcairn</Option>
        <Option value="Poland" label="Poland">Poland</Option>
        <Option value="Portugal" label="Portugal">Portugal</Option>
        <Option value="Puerto Rico" label="Puerto Rico">Puerto Rico</Option>
        <Option value="Qatar" label="Qatar">Qatar</Option>
        <Option value="Réunion" label="Réunion">Réunion</Option>
        <Option value="Romania" label="Romania">Romania</Option>
        <Option value="Russian Federation" label="Russian Federation">Russian Federation</Option>
        <Option value="Rwanda" label="Rwanda">Rwanda</Option>
        <Option value="Saint Barthélemy" label="Saint Barthélemy">Saint Barthélemy</Option>
        <Option value="Saint Helena, Ascension and Tristan da Cunha" label="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</Option>
        <Option value="Saint Kitts and Nevis" label="Saint Kitts and Nevis">Saint Kitts and Nevis</Option>
        <Option value="Saint Lucia" label="Saint Lucia">Saint Lucia</Option>
        <Option value="Saint Martin (French part)" label="Saint Martin (French part)">Saint Martin (French part)</Option>
        <Option value="Saint Pierre and Miquelon" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</Option>
        <Option value="Saint Vincent and the Grenadines" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</Option>
        <Option value="Samoa" label="Samoa">Samoa</Option>
        <Option value="San Marino" label="San Marino">San Marino</Option>
        <Option value="Sao Tome and Principe" label="Sao Tome and Principe">Sao Tome and Principe</Option>
        <Option value="Saudi Arabia" label="Saudi Arabia">Saudi Arabia</Option>
        <Option value="Senegal" label="Senegal">Senegal</Option>
        <Option value="Serbia" label="Serbia">Serbia</Option>
        <Option value="Seychelles" label="Seychelles">Seychelles</Option>
        <Option value="Sierra Leone" label="Sierra Leone">Sierra Leone</Option>
        <Option value="Singapore" label="Singapore">Singapore</Option>
        <Option value="Sint Maarten (Dutch part)" label="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</Option>
        <Option value="Slovakia" label="Slovakia">Slovakia</Option>
        <Option value="Slovenia" label="Slovenia">Slovenia</Option>
        <Option value="Solomon Islands" label="Solomon Islands">Solomon Islands</Option>
        <Option value="Somalia" label="Somalia">Somalia</Option>
        <Option value="South Africa" label="South Africa">South Africa</Option>
        <Option value="South Georgia and the South Sandwich Islands" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</Option>
        <Option value="South Sudan" label="South Sudan">South Sudan</Option>
        <Option value="Spain" label="Spain">Spain</Option>
        <Option value="Sri Lanka" label="Sri Lanka">Sri Lanka</Option>
        <Option value="Sudan" label="Sudan">Sudan</Option>
        <Option value="Suriname" label="Suriname">Suriname</Option>
        <Option value="Svalbard and Jan Mayen" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</Option>
        <Option value="Swaziland" label="Swaziland">Swaziland</Option>
        <Option value="Sweden" label="Sweden">Sweden</Option>
        <Option value="Switzerland" label="Switzerland">Switzerland</Option>
        <Option value="Syrian Arab Republic" label="Syrian Arab Republic">Syrian Arab Republic</Option>
        <Option value="Taiwan, Province of China" label="Taiwan, Province of China">Taiwan, Province of China</Option>
        <Option value="Tajikistan" label="Tajikistan">Tajikistan</Option>
        <Option value="Tanzania, United Republic of" label="Tanzania, United Republic of">Tanzania, United Republic of</Option>
        <Option value="Thailand" label="Thailand">Thailand</Option>
        <Option value="Timor-Leste" label="Timor-Leste">Timor-Leste</Option>
        <Option value="Togo" label="Togo">Togo</Option>
        <Option value="Tokelau" label="Tokelau">Tokelau</Option>
        <Option value="Tonga" label="Tonga">Tonga</Option>
        <Option value="Trinidad and Tobago" label="Trinidad and Tobago">Trinidad and Tobago</Option>
        <Option value="Tunisia" label="Tunisia">Tunisia</Option>
        <Option value="Turkey" label="Turkey">Turkey</Option>
        <Option value="Turkmenistan" label="Turkmenistan">Turkmenistan</Option>
        <Option value="Turks and Caicos Islands" label="Turks and Caicos Islands">Turks and Caicos Islands</Option>
        <Option value="Tuvalu" label="Tuvalu">Tuvalu</Option>
        <Option value="Uganda" label="Uganda">Uganda</Option>
        <Option value="Ukraine" label="Ukraine">Ukraine</Option>
        <Option value="United Arab Emirates" label="United Arab Emirates">United Arab Emirates</Option>
        <Option value="United Kingdom" label="United Kingdom">United Kingdom</Option>
        <Option value="United States" label="United States">United States</Option>
        <Option value="United States Minor Outlying Islands" label="United States Minor Outlying Islands">United States Minor Outlying Islands</Option>
        <Option value="Uruguay" label="Uruguay">Uruguay</Option>
        <Option value="Uzbekistan" label="Uzbekistan">Uzbekistan</Option>
        <Option value="Vanuatu" label="Vanuatu">Vanuatu</Option>
        <Option value="Venezuela, Bolivarian Republic of" label="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</Option>
        <Option value="Viet Nam" label="Viet Nam">Viet Nam</Option>
        <Option value="Virgin Islands, British" label="Virgin Islands, British">Virgin Islands, British</Option>
        <Option value="Virgin Islands, U.S." label="Virgin Islands, U.S.">Virgin Islands, U.S.</Option>
        <Option value="Wallis and Futuna" label="Wallis and Futuna">Wallis and Futuna</Option>
        <Option value="Western Sahara" label="Western Sahara">Western Sahara</Option>
        <Option value="Yemen" label="Yemen">Yemen</Option>
        <Option value="Zambia" label="Zambia">Zambia</Option>
        <Option value="Zimbabwe" label="Zimbabwe">Zimbabwe</Option>

      </div>  

    


    );
  }
}


