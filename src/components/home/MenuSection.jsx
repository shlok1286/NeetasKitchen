import {
  STARTERS,
  COMPLETE_DISHES,
  SHAAKS,
  BREADS,
  DALS,
  RICE,
  SWEETS,
  COMPLIMENTARY,
} from '../../constants/menuData'
import { useMenu } from '../../context/MenuContext'
import { Check, AlertCircle, ArrowDown, Sparkles } from 'lucide-react'

export default function MenuSection() {
  const {
    state,
    shaakLimitAlert,
    toggleStarter,
    toggleCompleteDish,
    toggleShaak,
    selectBread,
    selectDal,
    selectRice,
    selectSweet,
    toggleAmulButterPavBhaji,
    toggleAmulButterPaneerButterMasala,
    getSelectedStarters,
    getSelectedCompleteDishes,
    getSelectedShaaks,
    getSelectedBread,
    getSelectedDal,
    getSelectedRice,
    getSelectedSweet,
    totalDishesCount,
  } = useMenu()

  const selectedStarters = getSelectedStarters()
  const selectedComplete = getSelectedCompleteDishes()
  const selectedShaaks = getSelectedShaaks()
  const selectedBread = getSelectedBread()
  const selectedDal = getSelectedDal()
  const selectedRice = getSelectedRice()
  const selectedSweet = getSelectedSweet()

  const isShaakMaxReached = state.shaaks.length >= 2

  return (
    <section id="menu" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <Sparkles size={13} />
            <span>Interactive Menu Selection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            Build Your Menu
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Choose the dishes you'd like for your celebration.
          </p>
        </div>

        {/* Shaak Limit Warning Alert */}
        {shaakLimitAlert && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border-2 border-[#287A4A] bg-[#EAF4EC] p-4 text-sm font-bold text-[#17613A] animate-bounce">
            <AlertCircle size={20} className="text-[#287A4A] shrink-0" />
            <span>Maximum 2 Shaak can be selected.</span>
          </div>
        )}

        {/* Main Grid: Categories on Left, Selection Summary on Right */}
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
          
          {/* Left Column: Menu Categories */}
          <div className="space-y-14 text-left">
            
            {/* 1. STARTERS */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Starters</h3>
                  <p className="text-xs text-[#666666]">Select any number of starters</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Multiple Choice
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {STARTERS.map((item) => {
                  const isSelected = state.starters.includes(item.id)
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleStarter(item.id)}
                      className={`flex flex-col justify-between rounded-xl border-2 p-4 text-left transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-base font-bold text-[#262626]">
                            {item.name}
                          </p>
                          <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                            {item.gujaratiName}
                          </p>
                        </div>
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isSelected
                              ? 'border-[#287A4A] bg-[#287A4A] text-white'
                              : 'border-[#E3E8E3] bg-white text-transparent'
                          }`}
                        >
                          <Check size={13} strokeWidth={3} />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. COMPLETE DISHES */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Complete Dishes</h3>
                  <p className="text-xs text-[#666666]">Special festive dishes</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Optional
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {COMPLETE_DISHES.map((item) => {
                  const isSelected = state.completeDishes.includes(item.id)
                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col justify-between rounded-xl border-2 p-4 text-left transition-all ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleCompleteDish(item.id)}
                        className="flex items-start justify-between gap-2 w-full select-none cursor-pointer"
                      >
                        <div>
                          <p className="text-base font-bold text-[#262626]">
                            {item.name}
                          </p>
                          <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                            {item.gujaratiName}
                          </p>
                        </div>
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isSelected
                              ? 'border-[#287A4A] bg-[#287A4A] text-white'
                              : 'border-[#E3E8E3] bg-white text-transparent'
                          }`}
                        >
                          <Check size={13} strokeWidth={3} />
                        </div>
                      </button>

                      {/* Optional Amul Butter Checkbox for Pav Bhaji */}
                      {item.id === 'pav_bhaji' && isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#D6E8D8]">
                          <label className="flex items-center gap-2.5 cursor-pointer text-xs select-none">
                            <input
                              type="checkbox"
                              checked={state.amulButterPavBhaji}
                              onChange={toggleAmulButterPavBhaji}
                              className="h-4 w-4 rounded accent-[#287A4A]"
                            />
                            <div>
                              <span className="font-bold text-[#262626]">Add Amul Butter</span>
                              <span className="font-gujarati text-[#287A4A] ml-1 font-bold">(અમૂલ બટર)</span>
                              <p className="text-[11px] text-[#666666]">Amul Butter is available on request and may have an additional charge.</p>
                            </div>
                          </label>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 3. SHAAK (MAXIMUM 2) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Shaak / Curries</h3>
                  <p className="text-xs font-semibold text-[#287A4A]">
                    Select up to 2 Shaak ({state.shaaks.length}/2 selected)
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Maximum 2
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SHAAKS.map((item) => {
                  const isSelected = state.shaaks.includes(item.id)
                  const isDisabled = isShaakMaxReached && !isSelected

                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col justify-between rounded-xl border-2 p-4 text-left transition-all ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : isDisabled
                          ? 'border-[#E3E8E3]/60 bg-gray-50/70 opacity-40 cursor-not-allowed'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleShaak(item.id)}
                        className="flex items-start justify-between gap-2 w-full select-none cursor-pointer"
                      >
                        <div>
                          <p className="text-base font-bold text-[#262626] leading-snug">
                            {item.name}
                          </p>
                          <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                            {item.gujaratiName}
                          </p>
                        </div>
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isSelected
                              ? 'border-[#287A4A] bg-[#287A4A] text-white'
                              : 'border-[#E3E8E3] bg-white text-transparent'
                          }`}
                        >
                          <Check size={13} strokeWidth={3} />
                        </div>
                      </button>

                      {/* Optional Amul Butter Checkbox for Paneer Butter Masala */}
                      {item.id === 'paneer_butter_masala' && isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#D6E8D8]">
                          <label className="flex items-center gap-2.5 cursor-pointer text-xs select-none">
                            <input
                              type="checkbox"
                              checked={state.amulButterPaneerButterMasala}
                              onChange={toggleAmulButterPaneerButterMasala}
                              className="h-4 w-4 rounded accent-[#287A4A]"
                            />
                            <div>
                              <span className="font-bold text-[#262626]">Add Amul Butter</span>
                              <span className="font-gujarati text-[#287A4A] ml-1 font-bold">(અમૂલ બટર)</span>
                              <p className="text-[11px] text-[#666666]">Amul Butter is available on request and may have an additional charge.</p>
                            </div>
                          </label>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 4. BREAD (MAXIMUM 1) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Bread</h3>
                  <p className="text-xs text-[#666666]">Select 1 bread option</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Maximum 1
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {BREADS.map((item) => {
                  const isSelected = state.bread === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectBread(item.id)}
                      className={`flex items-start justify-between rounded-xl border-2 p-4 text-left transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-base font-bold text-[#262626]">
                          {item.name}
                        </p>
                        <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                          {item.gujaratiName}
                        </p>
                      </div>
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#287A4A] bg-[#287A4A] text-white'
                            : 'border-[#E3E8E3] bg-white text-transparent'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 5. DAL (MAXIMUM 1) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Dal</h3>
                  <p className="text-xs text-[#666666]">Select 1 traditional dal</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Maximum 1
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {DALS.map((item) => {
                  const isSelected = state.dal === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectDal(item.id)}
                      className={`flex items-start justify-between rounded-xl border-2 p-4 text-left transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-base font-bold text-[#262626]">
                          {item.name}
                        </p>
                        <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                          {item.gujaratiName}
                        </p>
                      </div>
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#287A4A] bg-[#287A4A] text-white'
                            : 'border-[#E3E8E3] bg-white text-transparent'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 6. RICE (MAXIMUM 1) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Rice</h3>
                  <p className="text-xs text-[#666666]">Select rice option</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Maximum 1
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {RICE.map((item) => {
                  const isSelected = state.rice === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectRice(item.id)}
                      className={`flex items-start justify-between rounded-xl border-2 p-4 text-left transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-base font-bold text-[#262626]">
                          {item.name}
                        </p>
                        <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                          {item.gujaratiName}
                        </p>
                      </div>
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#287A4A] bg-[#287A4A] text-white'
                            : 'border-[#E3E8E3] bg-white text-transparent'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 7. SWEET (MAXIMUM 1) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Sweet</h3>
                  <p className="text-xs text-[#666666]">Select traditional sweet</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Maximum 1
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {SWEETS.map((item) => {
                  const isSelected = state.sweet === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectSweet(item.id)}
                      className={`flex items-start justify-between rounded-xl border-2 p-4 text-left transition-all select-none cursor-pointer ${
                        isSelected
                          ? 'border-[#287A4A] bg-[#EAF4EC] shadow-[0_4px_16px_rgba(40,122,74,0.12)]'
                          : 'border-[#E3E8E3] bg-[#F7F8F4] hover:border-[#287A4A]/50 hover:bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-base font-bold text-[#262626]">
                          {item.name}
                        </p>
                        <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">
                          {item.gujaratiName}
                        </p>
                      </div>
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#287A4A] bg-[#287A4A] text-white'
                            : 'border-[#E3E8E3] bg-white text-transparent'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 8. COMPLIMENTARY (AUTO-INCLUDED) */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#262626]">Complimentary</h3>
                  <p className="text-xs font-semibold text-[#287A4A]">Included with every catering order</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">
                  Auto Included
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {COMPLIMENTARY.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between rounded-xl border-2 border-[#D6E8D8] bg-[#EAF4EC]/60 p-4 text-left"
                  >
                    <div>
                      <p className="text-base font-bold text-[#262626]">{item.name}</p>
                      <p className="font-gujarati text-sm font-semibold text-[#287A4A] mt-0.5">{item.gujaratiName}</p>
                      <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-[#287A4A]">
                        Included with every catering order
                      </span>
                    </div>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#287A4A] text-white">
                      <Check size={13} strokeWidth={3} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Sticky "Your Selection" Catering Summary */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E3E8E3] bg-white p-6 shadow-[0_12px_36px_rgba(40,122,74,0.06)] text-left space-y-6">
              
              <div className="border-b border-[#E3E8E3] pb-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                  Catering Summary
                </p>
                <h4 className="font-display text-2xl font-bold text-[#262626] mt-1">
                  Your Selection
                </h4>
                <p className="text-xs text-[#666666] mt-0.5">
                  {totalDishesCount} {totalDishesCount === 1 ? 'custom dish' : 'custom dishes'} selected
                </p>
              </div>

              {/* Selection List breakdown */}
              <div className="space-y-4 text-xs">
                
                {/* Starters */}
                <div>
                  <span className="font-bold text-[#262626] uppercase tracking-wider text-[11px]">Starters:</span>
                  {selectedStarters.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {selectedStarters.map((st) => (
                        <span key={st.id} className="rounded-md bg-[#EAF4EC] border border-[#D6E8D8] px-2.5 py-1 font-bold text-[#262626]">
                          {st.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({st.gujaratiName})</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#666666]/60 italic mt-0.5">None selected</p>
                  )}
                </div>

                {/* Complete Dishes */}
                <div>
                  <span className="font-bold text-[#262626] uppercase tracking-wider text-[11px]">Complete Dishes:</span>
                  {selectedComplete.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {selectedComplete.map((cd) => (
                        <span key={cd.id} className="rounded-md bg-[#EAF4EC] border border-[#D6E8D8] px-2.5 py-1 font-bold text-[#262626]">
                          {cd.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({cd.gujaratiName})</span>
                          {cd.id === 'pav_bhaji' && state.amulButterPavBhaji && ' + Amul Butter'}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#666666]/60 italic mt-0.5">None selected</p>
                  )}
                </div>

                {/* Shaaks */}
                <div>
                  <span className="font-bold text-[#262626] uppercase tracking-wider text-[11px]">Shaak (Max 2):</span>
                  {selectedShaaks.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {selectedShaaks.map((sh) => (
                        <span key={sh.id} className="rounded-md bg-[#EAF4EC] border border-[#D6E8D8] px-2.5 py-1 font-bold text-[#262626]">
                          {sh.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({sh.gujaratiName})</span>
                          {sh.id === 'paneer_butter_masala' && state.amulButterPaneerButterMasala && ' + Amul Butter'}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#666666]/60 italic mt-0.5">None selected (choose up to 2)</p>
                  )}
                </div>

                {/* Bread, Dal, Rice, Sweet */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E3E8E3]">
                  <div>
                    <span className="font-bold text-[#262626] uppercase tracking-wider text-[10px]">Bread:</span>
                    <p className="text-xs text-[#262626] font-bold mt-0.5">
                      {selectedBread ? (
                        <>
                          {selectedBread.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({selectedBread.gujaratiName})</span>
                        </>
                      ) : (
                        <span className="text-[#666666]/60 italic">None</span>
                      )}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#262626] uppercase tracking-wider text-[10px]">Dal:</span>
                    <p className="text-xs text-[#262626] font-bold mt-0.5">
                      {selectedDal ? (
                        <>
                          {selectedDal.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({selectedDal.gujaratiName})</span>
                        </>
                      ) : (
                        <span className="text-[#666666]/60 italic">None</span>
                      )}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#262626] uppercase tracking-wider text-[10px]">Rice:</span>
                    <p className="text-xs text-[#262626] font-bold mt-0.5">
                      {selectedRice ? (
                        <>
                          {selectedRice.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({selectedRice.gujaratiName})</span>
                        </>
                      ) : (
                        <span className="text-[#666666]/60 italic">None</span>
                      )}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#262626] uppercase tracking-wider text-[10px]">Sweet:</span>
                    <p className="text-xs text-[#262626] font-bold mt-0.5">
                      {selectedSweet ? (
                        <>
                          {selectedSweet.name} <span className="font-gujarati text-[10px] text-[#287A4A]">({selectedSweet.gujaratiName})</span>
                        </>
                      ) : (
                        <span className="text-[#666666]/60 italic">None</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Complimentary */}
                <div className="pt-2 border-t border-[#E3E8E3]">
                  <span className="font-bold text-[#287A4A] uppercase tracking-wider text-[10px]">Complimentary:</span>
                  <p className="text-xs text-[#666666] font-medium mt-0.5">
                    Papad & Papdi <span className="font-gujarati text-[10px]">({COMPLIMENTARY[0].gujaratiName})</span>, Achaar <span className="font-gujarati text-[10px]">({COMPLIMENTARY[1].gujaratiName})</span>
                  </p>
                </div>

              </div>

              {/* Continue CTA */}
              <div className="pt-2">
                <a
                  href="#event-details"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#287A4A] py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#17613A] transition-all"
                >
                  <span>Continue to Event Details</span>
                  <ArrowDown size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
