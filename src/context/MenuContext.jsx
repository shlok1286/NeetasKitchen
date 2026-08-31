import { createContext, useContext, useState, useEffect } from 'react'
import {
  STARTERS,
  COMPLETE_DISHES,
  SHAAKS,
  BREADS,
  DALS,
  RICE,
  SWEETS,
  COMPLIMENTARY,
} from '../constants/menuData'
import { business } from '../constants/business'

const MenuContext = createContext(null)

// Helper to get today's date in local YYYY-MM-DD
export const getTodayDateString = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Helper to format YYYY-MM-DD to "DD Month YYYY" (e.g., "1 September 2026")
export const formatReadableDate = (dateString) => {
  if (!dateString || typeof dateString !== 'string') return ''
  const parts = dateString.split('-')
  if (parts.length !== 3) return dateString

  const year = parseInt(parts[0], 10)
  const monthIdx = parseInt(parts[1], 10) - 1
  const day = parseInt(parts[2], 10)

  if (isNaN(year) || isNaN(monthIdx) || isNaN(day)) return dateString

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const monthName = months[monthIdx] || ''
  return `${monthName} ${day}, ${year}`
}

// Helper to validate that date is today or future
export const isDateValid = (dateString) => {
  if (!dateString) return false
  const todayStr = getTodayDateString()
  return dateString >= todayStr
}

const INITIAL_STATE = {
  starters: [],
  completeDishes: [],
  shaaks: [],
  bread: null,
  dal: null,
  rice: null,
  sweet: null,
  amulButterPavBhaji: false,
  amulButterPaneerButterMasala: false,
  eventDetails: {
    name: '',
    phone: '',
    eventType: 'Wedding',
    customEventType: '',
    date: '',
    guestCount: '',
    location: '',
    serviceType: 'delivery', // 'delivery' or 'pickup'
    notes: '',
  },
}

export function MenuProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('neetaskitchen_catering_v3')
      return saved ? JSON.parse(saved) : INITIAL_STATE
    } catch {
      return INITIAL_STATE
    }
  })

  const [shaakLimitAlert, setShaakLimitAlert] = useState(false)
  const [dateValidationAlert, setDateValidationAlert] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('neetaskitchen_catering_v3', JSON.stringify(state))
    } catch (e) {
      console.warn('Failed to sync to localStorage', e)
    }
  }, [state])

  // Handlers
  const toggleStarter = (id) => {
    setState((prev) => {
      const exists = prev.starters.includes(id)
      return {
        ...prev,
        starters: exists
          ? prev.starters.filter((item) => item !== id)
          : [...prev.starters, id],
      }
    })
  }

  const toggleCompleteDish = (id) => {
    setState((prev) => {
      const exists = prev.completeDishes.includes(id)
      const nextCompleteDishes = exists
        ? prev.completeDishes.filter((item) => item !== id)
        : [...prev.completeDishes, id]
      
      let nextAmulButterPavBhaji = prev.amulButterPavBhaji
      if (id === 'pav_bhaji' && exists) {
        nextAmulButterPavBhaji = false
      }

      return {
        ...prev,
        completeDishes: nextCompleteDishes,
        amulButterPavBhaji: nextAmulButterPavBhaji,
      }
    })
  }

  const toggleShaak = (id) => {
    setState((prev) => {
      const exists = prev.shaaks.includes(id)
      if (exists) {
        let nextAmulButterPaneer = prev.amulButterPaneerButterMasala
        if (id === 'paneer_butter_masala') {
          nextAmulButterPaneer = false
        }
        return {
          ...prev,
          shaaks: prev.shaaks.filter((item) => item !== id),
          amulButterPaneerButterMasala: nextAmulButterPaneer,
        }
      } else {
        if (prev.shaaks.length >= 2) {
          setShaakLimitAlert(true)
          setTimeout(() => setShaakLimitAlert(false), 4000)
          return prev
        }
        return {
          ...prev,
          shaaks: [...prev.shaaks, id],
        }
      }
    })
  }

  const selectBread = (id) => {
    setState((prev) => ({
      ...prev,
      bread: prev.bread === id ? null : id,
    }))
  }

  const selectDal = (id) => {
    setState((prev) => ({
      ...prev,
      dal: prev.dal === id ? null : id,
    }))
  }

  const selectRice = (id) => {
    setState((prev) => ({
      ...prev,
      rice: prev.rice === id ? null : id,
    }))
  }

  const selectSweet = (id) => {
    setState((prev) => ({
      ...prev,
      sweet: prev.sweet === id ? null : id,
    }))
  }

  const toggleAmulButterPavBhaji = () => {
    setState((prev) => ({
      ...prev,
      amulButterPavBhaji: !prev.amulButterPavBhaji,
    }))
  }

  const toggleAmulButterPaneerButterMasala = () => {
    setState((prev) => ({
      ...prev,
      amulButterPaneerButterMasala: !prev.amulButterPaneerButterMasala,
    }))
  }

  const updateEventDetails = (fields) => {
    if (fields.date !== undefined) {
      if (fields.date && !isDateValid(fields.date)) {
        setDateValidationAlert(true)
        setTimeout(() => setDateValidationAlert(false), 4000)
      } else {
        setDateValidationAlert(false)
      }
    }

    setState((prev) => ({
      ...prev,
      eventDetails: {
        ...prev.eventDetails,
        ...fields,
      },
    }))
  }

  const resetSelection = () => {
    setState(INITIAL_STATE)
  }

  // Selected item objects helper
  const getSelectedStarters = () => STARTERS.filter((s) => state.starters.includes(s.id))
  const getSelectedCompleteDishes = () => COMPLETE_DISHES.filter((c) => state.completeDishes.includes(c.id))
  const getSelectedShaaks = () => SHAAKS.filter((s) => state.shaaks.includes(s.id))
  const getSelectedBread = () => BREADS.find((b) => b.id === state.bread)
  const getSelectedDal = () => DALS.find((d) => d.id === state.dal)
  const getSelectedRice = () => RICE.find((r) => r.id === state.rice)
  const getSelectedSweet = () => SWEETS.find((sw) => sw.id === state.sweet)

  const totalDishesCount =
    state.starters.length +
    state.completeDishes.length +
    state.shaaks.length +
    (state.bread ? 1 : 0) +
    (state.dal ? 1 : 0) +
    (state.rice ? 1 : 0) +
    (state.sweet ? 1 : 0)

  // Generate WhatsApp Message URL
  const generateWhatsAppUrl = () => {
    const { name, phone, eventType, customEventType, date, guestCount, location, serviceType, notes } = state.eventDetails

    const actualEventType = eventType === 'Other' ? (customEventType || 'Other Function') : eventType
    const formattedDate = date ? formatReadableDate(date) : 'Not specified'

    const selectedStarters = getSelectedStarters()
    const selectedComplete = getSelectedCompleteDishes()
    const selectedShaaks = getSelectedShaaks()
    const breadObj = getSelectedBread()
    const dalObj = getSelectedDal()
    const riceObj = getSelectedRice()
    const sweetObj = getSelectedSweet()

    let lines = []
    lines.push(`*CATERING INQUIRY — NEETA'S KITCHEN*`)
    lines.push(``)
    lines.push(`*CUSTOMER DETAILS:*`)
    lines.push(`• Name: ${name || 'Not provided'}`)
    lines.push(`• Mobile: ${phone || 'Not provided'}`)
    lines.push(``)
    lines.push(`*EVENT DETAILS:*`)
    lines.push(`• Event Type: ${actualEventType}`)
    lines.push(`• Event Date: ${formattedDate}`)
    lines.push(`• Estimated Guests: ${guestCount || 'Not specified'}`)
    lines.push(`• Location: ${location || 'Surat'}`)
    lines.push(`• Service Option: ${serviceType === 'pickup' ? 'Self Pickup' : 'Delivery'}`)
    lines.push(``)
    lines.push(`*SELECTED MENU ITEMS:*`)

    if (selectedStarters.length > 0) {
      lines.push(`*Starters:*`)
      selectedStarters.forEach((st) => lines.push(`  - ${st.name} (${st.gujaratiName})`))
    }

    if (selectedComplete.length > 0) {
      lines.push(`*Complete Dishes:*`)
      selectedComplete.forEach((cd) => {
        let butterNote = ''
        if (cd.id === 'pav_bhaji' && state.amulButterPavBhaji) {
          butterNote = ' [Amul Butter requested]'
        }
        lines.push(`  - ${cd.name} (${cd.gujaratiName})${butterNote}`)
      })
    }

    if (selectedShaaks.length > 0) {
      lines.push(`*Shaak:*`)
      selectedShaaks.forEach((sh) => {
        let butterNote = ''
        if (sh.id === 'paneer_butter_masala' && state.amulButterPaneerButterMasala) {
          butterNote = ' [Amul Butter requested]'
        }
        lines.push(`  - ${sh.name} (${sh.gujaratiName})${butterNote}`)
      })
    }

    if (breadObj) {
      lines.push(`*Bread:* ${breadObj.name} (${breadObj.gujaratiName})`)
    }

    if (dalObj) {
      lines.push(`*Dal:* ${dalObj.name} (${dalObj.gujaratiName})`)
    }

    if (riceObj) {
      lines.push(`*Rice:* ${riceObj.name} (${riceObj.gujaratiName})`)
    }

    if (sweetObj) {
      lines.push(`*Sweet:* ${sweetObj.name} (${sweetObj.gujaratiName})`)
    }

    lines.push(``)
    lines.push(`*COMPLIMENTARY ITEMS:*`)
    COMPLIMENTARY.forEach((c) => lines.push(`  - ${c.name} (${c.gujaratiName})`))

    if (notes && notes.trim() !== '') {
      lines.push(``)
      lines.push(`*SPECIAL REQUIREMENTS / NOTES:*`)
      lines.push(`${notes.trim()}`)
    }

    lines.push(``)
    lines.push(`Please let me know about availability and quotation.`)

    const message = lines.join('\n')
    return `${business.whatsappBaseUrl}?text=${encodeURIComponent(message)}`
  }

  return (
    <MenuContext.Provider
      value={{
        state,
        shaakLimitAlert,
        dateValidationAlert,
        toggleStarter,
        toggleCompleteDish,
        toggleShaak,
        selectBread,
        selectDal,
        selectRice,
        selectSweet,
        toggleAmulButterPavBhaji,
        toggleAmulButterPaneerButterMasala,
        updateEventDetails,
        resetSelection,
        getSelectedStarters,
        getSelectedCompleteDishes,
        getSelectedShaaks,
        getSelectedBread,
        getSelectedDal,
        getSelectedRice,
        getSelectedSweet,
        totalDishesCount,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}
