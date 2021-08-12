Feature: Realizar compra de passagem no site smiles

     Scenario: Realizar compra de passagem aerea
          Given que estou no site da smile
          When informo dados da viagem
          Then seleneciono voo e milhas
          And valido detalhes do voo e clico continuar
          And valido pagina de login 

          