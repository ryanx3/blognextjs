import { useCallback, useMemo } from "react"
import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "./social-providers"
import { useClipboard } from "../use-clipboard"
import { Check, Link } from "lucide-react"

type useShareProps = ShareConfig & {
  clipboardTimeout: number
}

export const useShare = ({ title, url, text, clipboardTimeout = 2000 }: useShareProps) => {
  const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(() => (
    {
      url,
      ...(title && { title }),
      ...(text && { text }),
    }
  ), [url, title, text])

  const share = useCallback((provider: SocialProvider) => {
    try {
      if (provider === 'clipboard') {
        return handleCopy(url)
      }

      const providerConfig = SOCIAL_PROVIDERS[provider]

      if (!providerConfig) {
        throw new Error(`Provider inválido: ${provider}`)
      }

      const shareUrl = providerConfig.shareUrl(shareConfig)
      const shareWindow = window.open(
        shareUrl,
        '_blank',
        'width=600, height=600, location=yes, status=yes'
      );

      return !!shareWindow
    } catch (error) {
      console.log(error)
      return false
    }
  }, [shareConfig, handleCopy, url])

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })), {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado' : 'Copiar link',
        icon: isCopied ? <Check/> : <Link className="h-4 w-4"/>,
        action: () => share('clipboard')
      },
    ],
    [share, isCopied]
  );

  return {
    shareButtons
  }
}