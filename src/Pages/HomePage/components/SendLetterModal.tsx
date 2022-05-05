import React from 'react';
import {
  ImageModalContainer,
  ModalContainer,
} from '../../../styles/HomePage.styles';
import { ReactComponent as CloseSVG } from '../../../images/close.svg';
import LetterBody from './LetterBody';
import Firestore from '../../../services/Firestore';
import AcopiadoImage from '../../../images/batch/Acopiado.jpg';
import AlbeosImage from '../../../images/batch/Albeos.jpg';
import AlemaniaImage from '../../../images/batch/Alemania.jpg';
import AlidonImage from '../../../images/batch/Alidon.png';
import CapadnganImage from '../../../images/batch/Capadngan.png';
import AllosadaImage from '../../../images/batch/Allosada.jpg';
import AmaquitonImage from '../../../images/batch/Amaquiton.jpg';
import AmitImage from '../../../images/batch/Amit.jpg';
import AmoyoImage from '../../../images/batch/Amoyo.jpg';
import AradanasImage from '../../../images/batch/Aradanas.jpg';
import BaclayImage from '../../../images/batch/Baclay.jpg';
import BalabatImage from '../../../images/batch/Balabat.jpg';
import BaliliImage from '../../../images/batch/Balili.jpg';
import BenitezImage from '../../../images/batch/Benitez.jpg';
import BiliranImage from '../../../images/batch/Biliran.jpg';
import BolotaoloImage from '../../../images/batch/Bolotaolo.jpg';
import BonjocImage from '../../../images/batch/Bonjoc.jpg';
import BorbonImage from '../../../images/batch/Borbon.jpg';
import CamasuraImage from '../../../images/batch/Camasura.jpg';
import CamelloImage from '../../../images/batch/Camello.jpg';
import CanlasImage from '../../../images/batch/Canlas.jpg';
import CastanaresImage from '../../../images/batch/Castanares.jpg';
import CenizaImage from '../../../images/batch/Ceniza.jpg';
import CondeImage from '../../../images/batch/Conde.jpg';
import CondorImage from '../../../images/batch/Condor.jpg';
import DangcoganImage from '../../../images/batch/Dangcogan.jpg';
import DeiparineImage from '../../../images/batch/Deiparine.jpg';
import DelaTorreImage from '../../../images/batch/Dela Torre.jpg';
import DoloriconImage from '../../../images/batch/Doloricon.jpg';
import DomailImage from '../../../images/batch/Domail.jpg';
import DraperImage from '../../../images/batch/Draper.jpg';
import DuronImage from '../../../images/batch/Duron.jpg';
import ElectonaImage from '../../../images/batch/Electona.jpg';
import ElmidoImage from '../../../images/batch/Elmido.jpg';
import EspinaImage from '../../../images/batch/Espina.jpg';
import GabutanImage from '../../../images/batch/Gabutan.jpg';
import GaiteImage from '../../../images/batch/Gaite.jpg';
import GeminaImage from '../../../images/batch/Gemina.jpg';
import GorreroImage from '../../../images/batch/Gorero.jpg';
import IntanoImage from '../../../images/batch/Intano.jpg';
import LegaspiImage from '../../../images/batch/Legaspi.jpg';
import LepitenImage from '../../../images/batch/Lepiten.jpg';
import LobitanaImage from '../../../images/batch/Lobitana.jpg';
import LoposImage from '../../../images/batch/Lopos.jpg';
import MacachorImage from '../../../images/batch/Macachor.jpg';
import MaderaImage from '../../../images/batch/Madera.jpg';
import MagbanuaImage from '../../../images/batch/Magbanua.jpg';
import MagpayoImage from '../../../images/batch/Magpayo.jpg';
import ManlegroImage from '../../../images/batch/Manlegro.jpg';
import MansoImage from '../../../images/batch/Manso.jpg';
import ManuelImage from '../../../images/batch/Manuel.jpg';
import MendozaImage from '../../../images/batch/Mendoza.jpg';
import MilanaImage from '../../../images/batch/Milana.jpg';
import MilayImage from '../../../images/batch/Milay.jpg';
import MondragonImage from '../../../images/batch/Mondragon.jpg';
import MonsalesImage from '../../../images/batch/Monsales.jpg';
import MontecilloImage from '../../../images/batch/Montecillo.jpg';
import MorikawaImage from '../../../images/batch/Morikawa.jpg';
import NamocatcatImage from '../../../images/batch/Namocatacat.jpg';
import NicolasImage from '../../../images/batch/Nicolas.jpg';
import OngImage from '../../../images/batch/Ong.jpg';
import OpladoImage from '../../../images/batch/Oplado.jpg';
import PalahangImage from '../../../images/batch/Palahang.jpg';
import PalanaImage from '../../../images/batch/Palana.jpg';
import PartosaImage from '../../../images/batch/Partosa.jpg';
import PepitoImage from '../../../images/batch/Pepito.jpg';
import PortriasImage from '../../../images/batch/Portrias.jpg';
import RallonImage from '../../../images/batch/Rallon.jpg';
import RendonImage from '../../../images/batch/Rendon.jpg';
import RicamorImage from '../../../images/batch/Ricamor.jpg';
import RiveraImage from '../../../images/batch/Rivera.jpg';
import SagradoImage from '../../../images/batch/Sagrado.jpg';
import SajulgaImage from '../../../images/batch/Sajulga.jpg';
import SalesImage from '../../../images/batch/Sales.jpg';
import SevillaImage from '../../../images/batch/Sevilla.jpg';
import SolanteImage from '../../../images/batch/Solante.jpg';
import SundoImage from '../../../images/batch/Sundo.jpg';
import TaerImage from '../../../images/batch/Taer.jpg';
import TalonImage from '../../../images/batch/Talon.jpg';
import TorralbaImage from '../../../images/batch/Torralba.jpg';
import TumacoleImage from '../../../images/batch/Tumacole.jpg';
import UcangImage from '../../../images/batch/Ucang.jpg';
import UmaliImage from '../../../images/batch/Umali.jpg';
import UnsonImage from '../../../images/batch/Unson.jpg';
import ValleVaughnImage from '../../../images/batch/Valle Vaughn.jpg';
import ValleVinceImage from '../../../images/batch/Valle Vince.jpg';
import YuagImage from '../../../images/batch/Yuag.jpg';
import YusingboImage from '../../../images/batch/Yusingbo.jpg';
import YusonImage from '../../../images/batch/Yuson.jpg';
import students from '../../../constants/students';
import { User } from '@firebase/auth';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
  closeModal: () => void;
  pickedStudent: string;
}

const SendLetterModal = (props: PropsInterface) => {
  const { firestore, user, closeModal, pickedStudent } = props;

  const ImageRef: any = {
    Acopiado: AcopiadoImage,
    Albeos: AlbeosImage,
    Alemania: AlemaniaImage,
    Alidon: AlidonImage,
    Allosada: AllosadaImage,
    Amaquiton: AmaquitonImage,
    Amit: AmitImage,
    Amoyo: AmoyoImage,
    Aradanas: AradanasImage,
    Baclay: BaclayImage,
    Balabat: BalabatImage,
    Balili: BaliliImage,
    Benitez: BenitezImage,
    Biliran: BiliranImage,
    Bolotaolo: BolotaoloImage,
    Bonjoc: BonjocImage,
    Borbon: BorbonImage,
    Camasura: CamasuraImage,
    Camello: CamelloImage,
    Canlas: CanlasImage,
    Castanares: CastanaresImage,
    Ceniza: CenizaImage,
    Conde: CondeImage,
    Condor: CondorImage,
    Dangcogan: DangcoganImage,
    Deiparine: DeiparineImage,
    DelaTorre: DelaTorreImage,
    Capadngan: CapadnganImage,
    Doloricon: DoloriconImage,
    Domail: DomailImage,
    Draper: DraperImage,
    Duron: DuronImage,
    Electona: ElectonaImage,
    Elmido: ElmidoImage,
    Espina: EspinaImage,
    Gabutan: GabutanImage,
    Gaite: GaiteImage,
    Gemina: GeminaImage,
    Gorrero: GorreroImage,
    Intano: IntanoImage,
    Legaspi: LegaspiImage,
    Lepiten: LepitenImage,
    Lobitana: LobitanaImage,
    Lopos: LoposImage,
    Macachor: MacachorImage,
    Madera: MaderaImage,
    Magbanua: MagbanuaImage,
    Magpayo: MagpayoImage,
    Manlegro: ManlegroImage,
    Manso: MansoImage,
    Manuel: ManuelImage,
    Mendoza: MendozaImage,
    Milana: MilanaImage,
    Milay: MilayImage,
    Mondragon: MondragonImage,
    Monsales: MonsalesImage,
    Montecillo: MontecilloImage,
    Morikawa: MorikawaImage,
    Namocatcat: NamocatcatImage,
    Nicolas: NicolasImage,
    Ong: OngImage,
    Oplado: OpladoImage,
    Palahang: PalahangImage,
    Palana: PalanaImage,
    Partosa: PartosaImage,
    Pepito: PepitoImage,
    Portrias: PortriasImage,
    Rallon: RallonImage,
    Rendon: RendonImage,
    Ricamor: RicamorImage,
    Rivera: RiveraImage,
    Sagrado: SagradoImage,
    Sajulga: SajulgaImage,
    Sales: SalesImage,
    Sevilla: SevillaImage,
    Solante: SolanteImage,
    Sundo: SundoImage,
    Taer: TaerImage,
    Talon: TalonImage,
    Torralba: TorralbaImage,
    Tumacole: TumacoleImage,
    Ucang: UcangImage,
    Umali: UmaliImage,
    Unson: UnsonImage,
    ValleVaughn: ValleVaughnImage,
    ValleVince: ValleVinceImage,
    Yuag: YuagImage,
    Yusingbo: YusingboImage,
    Yuson: YusonImage,
  };

  const studentInfo = students.find(
    (student) =>
      student.label.replaceAll(' ', '').replaceAll('ñ', 'n') === pickedStudent
  );

  return (
    <ModalContainer>
      <CloseSVG id="close" onClick={closeModal} />
      <ImageModalContainer>
        <div>
          <img
            src={
              ImageRef[
                pickedStudent.trim().replaceAll(' ', '').replaceAll('ñ', 'n')
              ]
            }
            alt="face"
          />
          <p id="name">{studentInfo?.value || 'Not Found'}</p>
          <p id="nickname">A.K.A {studentInfo?.nickname || '.....'}</p>
          <CloseSVG id="mobile" onClick={closeModal} />
        </div>
        <p id="scroll">Scroll down to send a message</p>
      </ImageModalContainer>
      <LetterBody
        firestore={firestore}
        user={user}
        pickedStudent={pickedStudent}
      />
    </ModalContainer>
  );
};

export default SendLetterModal;
