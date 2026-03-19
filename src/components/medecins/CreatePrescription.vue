<template>
  <div class="w-full bg-[#f8f8f8]">
    <Header subtitle="Prescription" />
    
    <div class="p-8">
        <div class="bg-white border border-[#f0f0f0] rounded-[10px] p-4">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-semibold text-[18px] text-[#1b1b1b]">Création d'une prescription</h2>
            <button class="border border-[#f0f0f0] px-[18px] py-[7px] rounded-[10px] flex items-center gap-[10px] hover:bg-gray-50">
              <svg class="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="#7F7F7F" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
            </button>
          </div>

          <!-- Form Content -->
          <div class="border border-[#f0f0f0] rounded-[10px] p-8">
            <div class="space-y-6">
              <!-- Question 1 -->
              <div>
                <p class="font-bold text-[12px] text-black mb-4">
                  1. Dans quelle situation permettant la prise en charge du transport se trouve votre patient ? (plusieurs choix possibles)
                </p>
                
                <Checkbox 
                  label="entrée ou sortie d'hospitalisation (complète, partielle ou ambulatoire), y compris séances de chimiothérapie, radiothérapie et hémodialyse"
                  class="mb-3"
                />
                
                <p class="font-bold text-[12px] text-black mb-3 ml-4">
                  Transport en lien avec une affection de longue durée avec déficience ou incapacité :
                </p>
                
                <div class="grid grid-cols-2 gap-4 mb-3">
                  <Checkbox label="ALD exonérante" />
                  <Checkbox label="ALD non exonérante" />
                </div>
                
                <Checkbox 
                  label="Transport Engagement maternité de lieu de résidence vers la maternité ou l'hébergement temporaire non médicalisé"
                  class="mb-3"
                />
                
                <Checkbox 
                  label="transport lié à un accident du travail ou une maladie professionnelle"
                  class="mb-3"
                />
              </div>

              <!-- Question 2 - Transport Requirements -->
              <div>
                <div class="grid grid-cols-2 gap-4 mb-3">
                  <Checkbox label="position allongée ou demi-assise" />
                  <Checkbox label="surveillance par une personne qualifiée" />
                </div>
                
                <div class="grid grid-cols-2 gap-4 mb-3">
                  <Checkbox label="d'administration d'oxygène" />
                  <Checkbox label="brancardage ou d'un portage" />
                </div>
                
                <Checkbox 
                  label="transport assis professionnalisé (VSL, taxi conventionné)"
                  class="mb-3"
                />
                
                <Checkbox 
                  label="l'état de santé du patient n'est pas compatible avec un transport partagé"
                  class="mb-3"
                />
                
                <div class="grid grid-cols-3 gap-4 mb-3">
                  <Checkbox label="un transport pour patient à mobilité réduite dans son fauteuil roulant est adapté" />
                  <Checkbox label="moyen de transport individuel" />
                  <Checkbox label="Transport en commun terrestre" />
                </div>
              </div>

              <!-- Question 3 - Journey -->
              <div>
                <p class="font-bold text-[12px] text-black mb-3">
                  Quel trajet doit effectuer le patient ?
                </p>
                
                <div class="space-y-3">
                  <div class="flex items-center gap-4">
                    <Checkbox label="départ – domicile" />
                    <div class="flex items-center gap-2">
                      <span class="text-[12px] font-bold">Autre lieu :</span>
                      <input 
                        type="text" 
                        class="border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder=""
                      />
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <Checkbox label="arrivée – domicile" />
                    <div class="flex items-center gap-2">
                      <span class="text-[12px] font-bold">Autre lieu :</span>
                      <input 
                        type="text" 
                        class="border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder=""
                      />
                      <span class="text-[12px] font-bold ml-4">structure de soins :</span>
                      <input 
                        type="text" 
                        class="border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Question 4 - Military Pension -->
              <div>
                <p class="font-normal text-[14px] text-black mb-3">
                  Ce transport est-il lié à des soins dispensés au titre d'une pension militaire d'invalidité ?
                </p>
                
                <div class="flex gap-4">
                  <Checkbox label="oui" />
                  <Checkbox label="non" />
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex justify-end gap-4 pt-6">
                <button class="border border-[#f0f0f0] px-6 py-2 rounded-[10px] text-[#7f7f7f] hover:bg-gray-50">
                  Annuler
                </button>
                <button class="bg-[#168bd9] text-white px-6 py-2 rounded-[10px] hover:opacity-90">
                  Créer la prescription
                </button>
              </div>
            </div>
          </div>

          <!-- Page Selector -->
          <div class="flex justify-end items-center gap-2 mt-4">
            <span class="text-[14px] text-[#1b1b1b]">Page</span>
            <div class="px-[10px] py-[6px] border border-[#f0f0f0] rounded-[5px] bg-white flex items-center gap-[10px] cursor-pointer">
              <span class="text-black text-[14px]">2</span>
              <svg class="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                <path clip-rule="evenodd" d="M9.39775 12.2102C9.17808 12.4299 8.82192 12.4299 8.60225 12.2102L2.97725 6.58525C2.75758 6.36558 2.75758 6.00942 2.97725 5.78975C3.19692 5.57008 3.55308 5.57008 3.77275 5.78975L9 11.017L14.2273 5.78975C14.4469 5.57008 14.8031 5.57008 15.0227 5.78975C15.2424 6.00942 15.2424 6.36558 15.0227 6.58525L9.39775 12.2102Z" fill="#7F7F7F" fill-rule="evenodd" />
              </svg>
            </div>
            <span class="text-[14px] text-black">of</span>
            <span class="text-[14px] text-black">34</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Header from '../Header.vue';
import Checkbox from '../Checkbox.vue';
</script>
